"use client";

import { Button } from "@/components/ui/button";
import AIChatButton from "@/components/chatbot/AIChatButton";
import AddEditInfoDialog from "@/components/ui/custom/AddEditInfoDialog";
import { Plus } from "lucide-react";
import { useState } from "react";

export default function InfoAction() {
  const [showAddEditInfoDialog, setShowAddEditInfoDialog] = useState(false);

  return (
    <div>
      <Button
        className="fixed bottom-10 left-10 flex w-[48px] h-[48px] rounded-full p-1"
        onClick={() => setShowAddEditInfoDialog(true)}
        >
        <Plus
          size={24}
          />
      </Button>
      <AddEditInfoDialog
        open={showAddEditInfoDialog}
        setOpen={setShowAddEditInfoDialog}
      />
    </div>
  );
}
