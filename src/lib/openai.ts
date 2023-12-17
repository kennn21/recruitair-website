//do npm install --save openai
import OpenAI from "openai"

const apiKey = process.env.OPENAI_API_KEY;

if (!apiKey) {
    throw Error("No OPENAI API key provided");
}

const openai = new OpenAI({ apiKey });

export default openai;

export async function getEmbedding(text: string) {
    const response = await openai.embeddings.create({
        input: text,
        model: "text-embedding-ada-002",
    })

    const embedding = response.data[0].embedding;

    if (!embedding) throw Error("Error generating embedding.");

    console.log(embedding);

    return embedding;
}
