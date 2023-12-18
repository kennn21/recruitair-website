"use server"

import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client"
import type {Job} from "@prisma/client"
import { JobType } from "@/types/schema/jobSchema";
import { currentUser } from "@clerk/nextjs";

const prisma = new PrismaClient();

export async function getJob(form : Job) {
  const user = await currentUser();
    try {
      return await prisma.job.findUnique({
        where : {
            id : form.id
        }
      });
  
    } catch (error) {

      console.error('Error creating job:', error);
      return NextResponse.error();

    } finally {
        
      await prisma.$disconnect();
    }
  };
