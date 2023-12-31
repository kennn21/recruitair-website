import prisma from "@/lib/prisma";
import { headers } from "next/headers";

type EventType = "user.created" | "user.updated" | "*";

type Event = {
  data: Record<string, string | number>;
  object: "event";
  type: EventType;
};

import { IncomingHttpHeaders } from "http";

import { NextResponse } from "next/server";
import { Webhook, WebhookRequiredHeaders } from "svix";
import { CreateUserDto, UpdateUserDto } from "@/types/validations/user.dto";

const webhookSecret = process.env.WEBHOOK_SECRET || "";

async function handler(request: Request) {
    const svix_id = request.headers.get("svix-id") ?? "";
    const svix_timestamp = request.headers.get("svix-timestamp") ?? "";
    const svix_signature = request.headers.get("svix-signature") ?? "";

    const body = await request.text(); // This gets the raw body as a string
    const svix = new Webhook(webhookSecret);
    let evt: Event | null = null;
      const headersList = headers();
    const heads = {
        "svix-id": headersList.get("svix-id"),
        "svix-timestamp": headersList.get("svix-timestamp"),
        "svix-signature": headersList.get("svix-signature"),
    };

    try {
        const payload = svix.verify(body, {
            "svix-id": svix_id,
            "svix-timestamp": svix_timestamp,
            "svix-signature": svix_signature,
        });

        evt = svix.verify(
            JSON.stringify(payload),
            heads as IncomingHttpHeaders & WebhookRequiredHeaders
          ) as Event;



        try{
            // const {
            //     id
            // } = CreateUserDto.parse(evt.data);

            const {
                id,
                first_name,
                email_addresses,
                profile_image_url,
                birthday,
            } = evt.data

            if(
              evt.type === "user.created" ||
              evt.type === "user.updated"
              )
            {
            const response = await prisma.user.upsert({
                where: { externalId: id as string},
                create: {
                  externalId: id as string,
                  FirstName: first_name as string || "",
                  LastName: evt.data.last_name ? evt.data.last_name as string :"Last",
                  // @ts-ignore
                  email: email_addresses[0]?.email_address as string,
                  imageUrl: profile_image_url as string,
                  birthDate: birthday ? new Date(birthday as string) : new Date(0),
                  address: "",
                  role: "APPLICANT",
                },
                update: { 
                  FirstName: first_name as string,
                  LastName: evt.data.last_name ? evt.data.last_name as string :"Last",
                  // @ts-ignore
                  email: email_addresses[0]?.email_address as string,
                  imageUrl: profile_image_url as string,
                  birthDate: birthday ? new Date(birthday as string) : new Date(0),
                 }, 
              });

              if(!response) return NextResponse.json({error: "failed to create/update profile"});

            console.log(id);
            return NextResponse.json(evt.data);
            }        
    } catch (e) {
        console.error('Error verifying webhook:', e);
        return NextResponse.json({error: e});
    }

    return NextResponse.json(evt.data)
} catch(e){
    console.error(e)
    return NextResponse.json({error: e});
}
}
export const GET = handler;
export const POST = handler;
export const PUT = handler;