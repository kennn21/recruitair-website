import Info from "@/components/ui/custom/Info";
import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs";
import { Metadata } from "next";
import InfoItem from "@/components/info/InfoItem";

export const metadata: Metadata = {
  title: "RECRUITAIR - Company Information",
};

export default async function InfoPage() {
  const { userId } = auth();

  if (!userId) throw Error("userId undefined");

  const allInfo = await prisma.info.findMany({ where: { userId } });

  return (
    <div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {allInfo.map((info) => (
          <Info info={info} key={info.id} />
        ))}
        {allInfo.length === 0 && (
          <div className="col-span-full text-center">
            {"You don't have any Information yet. Why don't you create one?"}
          </div>
        )}
      </div>
      <div>
        <InfoItem/>
      </div>
    </div>
  );
}
