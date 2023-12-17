"use server"
import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs";
import { Role, User } from "@prisma/client";

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

export const SwitchRole = async (newRole: Role) => {
    const user = await currentUser();
    try {
        const profile = await prisma.user.update({
            where: {
                externalId: user?.id
            },
            data: {
                role: newRole
            }
        })
        return {message: newRole.toString(), externalId: profile.externalId}
    } catch (e) {
        return {error: e}
    }
}

export const GetCurrentRole = async (): Promise<Role | {error: any}> => {
    const user = await currentUser();
    try {
        const profile: User | null = await prisma.user.findFirst({
            where: {
                externalId: user?.id
            }
        })

        if(!profile) return {error: "Failed to get user profile"}

        return profile.role
    } catch (e) {
        return {error: e}
    }
}