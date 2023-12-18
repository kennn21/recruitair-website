"use server"

import { createApplicationSchemaType } from "@/types/schema/createApplication";
import { currentUser } from "@clerk/nextjs";
import prisma from "@/lib/prisma";

export async function createApplication(form: createApplicationSchemaType) {
    const user = await currentUser();

    if(!user) {
        throw new Error("User not found");
    }

    return await prisma.application.create({
        data: {
            jobId: 1, //example
            userId: 1, //example
            status: "INITIAL_APPLICATION",
            yearsOfWorkExperience: form.workExperiences,
            willingToWorkInOffice: form.isWorkInOffice== "YES" ? true : false,
            experienceInField: form.isHaveExperience == "YES" ? true : false, 
        }
    })
}