import prisma from '@/lib/prisma';
import { auth } from '@clerk/nextjs';
import { Metadata } from 'next';
import InfoList from '@/components/info/InfoList';

export const metadata: Metadata = {
  title: 'Recruitair - Company Information',
};

export default async function InfoPage() {
  const { userId } = auth();

  if (!userId) throw new Error('userId undefined');

  const allInfo = await prisma.info.findMany({ where: { userId } });

  return (
    <InfoList allInfo={allInfo}/>
  );
}
