import { getEmbedding } from "@/lib/openai";
import { infoIndex } from "@/lib/db/pinecone";
import prisma from "@/lib/prisma";
import {
    createInfoSchema,
    deleteInfoSchema,
    updateInfoSchema,
  } from "@/lib/validation/info";
import { auth } from "@clerk/nextjs";

export async function POST(req: Request) {
    try {
      const body = await req.json();
  
      const parseResult = createInfoSchema.safeParse(body);
  
      if (!parseResult.success) {
        console.error(parseResult.error);
        return Response.json({ error: "Invalid input" }, { status: 400 });
      }
  
      const { title, content } = parseResult.data;
  
      const { userId } = auth();
  
      if (!userId) {
        return Response.json({ error: "Unauthorized" }, { status: 401 });
      }
  
      const embedding = await getEmbeddingForInfo(title, content);
  
      const info = await prisma.$transaction(async (tx) => {
        const createdInfo = await tx.info.create({
          data: {
            title,
            content,
            userId,
          },
        });
      
        await infoIndex.upsert([
          {
            id: createdInfo.id.toString(),
            values: embedding,
            metadata: { userId },
          },
        ]);
      
        return createdInfo;
      });
     
      return Response.json({ info }, { status: 201 });
    } catch (error) {
      console.error(error);
      return Response.json({ error: "Internal server error" }, { status: 500 });
    }
  }

  export async function PUT(req: Request) {
    try {
      const body = await req.json();
  
      const parseResult = updateInfoSchema.safeParse(body);
  
      if (!parseResult.success) {
        console.error(parseResult.error);
        return Response.json({ error: "Invalid input" }, { status: 400 });
      }
  
      const { id, title, content } = parseResult.data;
  
      const info = await prisma.info.findUnique({ where: { id } });
  
      if (!info) {
        return Response.json({ error: "Info not found" }, { status: 404 });
      }
  
      const { userId } = auth();
  
      if (!userId || userId !== info.userId) {
        return Response.json({ error: "Unauthorized" }, { status: 401 });
      }
  
      const embedding = await getEmbeddingForInfo(title, content);
  
      const updatedInfo = await prisma.$transaction(async (tx) => {
        const updatedInfo = await tx.info.update({
          where: { id },
          data: {
            title,
            content,
          },
        });
  
        await infoIndex.upsert([
          {
            id,
            values: embedding,
            metadata: { userId },
          },
        ]);
  
        return updatedInfo;
      });
  
      return Response.json({ updatedInfo }, { status: 200 });
    } catch (error) {
      console.error(error);
      return Response.json({ error: "Internal server error" }, { status: 500 });
    }
  }
  
  export async function DELETE(req: Request) {
    try {
      const body = await req.json();
  
      const parseResult = deleteInfoSchema.safeParse(body);
  
      if (!parseResult.success) {
        console.error(parseResult.error);
        return Response.json({ error: "Invalid input" }, { status: 400 });
      }
  
      const { id } = parseResult.data;
  
      const info = await prisma.info.findUnique({ where: { id } });
  
      if (!info) {
        return Response.json({ error: "Info not found" }, { status: 404 });
      }
  
      const { userId } = auth();
  
      if (!userId || userId !== info.userId) {
        return Response.json({ error: "Unauthorized" }, { status: 401 });
      }
  
      await prisma.$transaction(async (tx) => {
        await tx.info.delete({ where: { id } });
        await infoIndex.deleteOne(id);
      });
  
      return Response.json({ message: "Info deleted" }, { status: 200 });
    } catch (error) {
      console.error(error);
      return Response.json({ error: "Internal server error" }, { status: 500 });
    }
  }

async function getEmbeddingForInfo(title: string, content: string|undefined) {
    return getEmbedding(title + "\n\n" + content ?? "");
}