"use server"
import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs";
import { User } from "@prisma/client";

export const GetCurrentUserProfile = async (): Promise<User | null> => {
    const user = await currentUser();
    try {
        const profile = await prisma.user.findUnique({
            where: {
                externalId: user?.id
            }
        })

        return profile

    } catch(e) {
        console.error(e)
        return null
    }
}

export const UpdateUserProfile = async (data: Partial<User>): Promise<User | null> => {
    try {

        const profile = await prisma.user.update({
            where: {
                id: data.id
            },
            data: {
                ...data,
                yearsOfWorkExperience: Number(data.yearsOfWorkExperience),
                // @ts-ignore
                willingToWorkInOffice: data.willingToWorkInOffice === 'true' ? true : false,
                // @ts-ignore
                experienceInField: data.experienceInField === 'true' ? true : false,
            }
        })

        return profile

    } catch (e) {
        console.error(e)
        return null
    }
}