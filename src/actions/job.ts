"use server"

import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client"
import type {Job} from "@prisma/client"
import { JobType } from "@/types/schema/jobSchema";
import { currentUser } from "@clerk/nextjs";

const prisma = new PrismaClient();

export async function createJob(form : JobType) {
  const user = await currentUser();
    try {
      return await prisma.job.create({
        data: {
          title: form.title,
          imageUrl: form.imageUrl,
          createdAt: new Date(), 
          updatedAt: new Date(), 
          startDate: form.startDate,
          endDate: form.endDate,
          createdBy: user?.firstName ? user.firstName.toString() : "",
          updatedBy: user?.firstName ? user.firstName.toString() : "",
          description: form.description,
          requirements: form.requirements,
          location: form.location,
          salary: form.salary,
        },
      });
  
    } catch (error) {

      console.error('Error creating job:', error);
      return NextResponse.error();

    } finally {
        
      await prisma.$disconnect();
    }
  };

export async function deleteJob(id: number) {
  const user = await currentUser();
  if (!user) {
      throw new Error("user not found")
  }

  try{
    return await prisma.job.delete({
        where: {
            id: id,
        }
    })
    
  } catch (error) {

    console.error('Error deleting job:', error);
    return NextResponse.error();

  } finally {
      
    await prisma.$disconnect();
  }
}

export async function updateJob(jobProps: Job, form : JobType) {
  const user = await currentUser();
  if (!user) {
      throw new Error("user not found")
  }

  try{
    return await prisma.job.update({
      where:{
        id: jobProps.id
       },
       data:{
        title: form.title,
        imageUrl: form.imageUrl,
        createdAt: jobProps.createdAt, 
        updatedAt: new Date(), 
        startDate: form.startDate,
        endDate: form.endDate,
        createdBy: user?.firstName ? user.firstName.toString() : "",
        updatedBy: user?.firstName ? user.firstName.toString() : "",
        description: form.description,
        requirements: form.requirements,
        location: form.location,
        salary: form.salary,
       }
    })
    
  } catch (error) {

    console.error('Error Getting job:', error);
    return NextResponse.error();

  } finally {
      
    await prisma.$disconnect();
  }
}
