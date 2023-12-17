"use server"

import { createApplicationSchemaType } from "@/types/schema/createApplication";
import { currentUser } from "@clerk/nextjs";
import prisma from "@/lib/prisma";
import { GetCurrentUserProfile } from "./user";

export async function createApplication(form: createApplicationSchemaType, jobId: number) {
    const currentUser = await GetCurrentUserProfile();

    if(!currentUser) {
        throw new Error("User not found");
    }

    const alreadyApplied = await prisma.application.findFirst({
        where: {
            jobId: jobId,
            userId: currentUser.id,
            status: {
                not: "REJECTED"
            }
        }
    })

    if(alreadyApplied) throw new Error("You've already applied for this job!")

    try {
        const res = await prisma.application.create({
            data: {
                jobId: jobId,
                userId: currentUser.id, //example
                status: "INITIAL_APPLICATION",
                yearsOfWorkExperience: form.workExperiences,
                willingToWorkInOffice: form.isWorkInOffice== "YES" ? true : false,
                experienceInField: form.isHaveExperience == "YES" ? true : false, 
            }
        })

        if(!res) throw new Error(`Failed to create application`)

        return await prisma.job.findUnique({
            where: {
                id: jobId
            }
        })

    } catch (e) {
        throw new Error(`Failed to create application ${e}`)
    }
}