import { ChatCompletionMessage } from "openai/resources/index.mjs";
import openai, { getEmbedding } from "@/lib/openai";
import { auth } from "@clerk/nextjs";
import { infoIndex } from "@/lib/db/pinecone";
import { OpenAIStream, StreamingTextResponse } from "ai";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const messages: ChatCompletionMessage[] = body.messages;

    const messagesTruncated = messages.slice(-6);

    const embedding = await getEmbedding(
      messagesTruncated.map((message) => message.content).join("\n")
    );

    const { userId } = auth();

    const vectorQueryResponse = await infoIndex.query({
      vector: embedding,
      topK: 4, //how many result we want to return, more result more expensive
      filter: { userId }, //filter from user ID
    });

    const relevantInfo = await prisma.info.findMany({
      where: {
        id: {
          in: vectorQueryResponse.matches.map((match) => match.id),
        },
      },
    });

    console.log("Relevant info found: ", relevantInfo);

    const systemMessage: ChatCompletionMessage = {
      role: "assistant", //system
      content:
        "You are an intelligent information app. You answer the user's question based on their existing info. " +
        "The relevant information for this query are:\n" +
        relevantInfo
          .map((info) => `Title: ${info.title}\n\nContent:\n${info.content}`)
          .join("\n\n"),
    };

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      stream: true,
      messages: [systemMessage, ...messagesTruncated],
    });

    const stream = OpenAIStream(response);
    return new StreamingTextResponse(stream);
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
