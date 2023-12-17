"use client";

import { Info as InfoModel } from "@prisma/client";
import { useState } from "react";
import AddEditInfoDialog from "./AddEditInfoDialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface InfoProps {
  info: InfoModel;
}

export default function Info({ info }: InfoProps) {
  const [showEditDialog, setShowEditDialog] = useState(false);

  const wasUpdated = info.updatedAt > info.createdAt;

  const createdUpdatedAtTimestamp = (
    wasUpdated ? info.updatedAt : info.createdAt
  ).toDateString();

  return (
    <>
      <Card
        className="cursor-pointer transition-shadow hover:shadow-lg"
        onClick={() => setShowEditDialog(true)}
      >
        <CardHeader>
          <CardTitle>{info.title}</CardTitle>
          <CardDescription>
            {createdUpdatedAtTimestamp}
            {wasUpdated && " (updated)"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="whitespace-pre-line">{info.content}</p>
        </CardContent>
      </Card>
      <AddEditInfoDialog
        open={showEditDialog}
        setOpen={setShowEditDialog}
        infoToEdit={info}
      />
    </>
  );
}
