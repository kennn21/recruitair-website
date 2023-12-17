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
      <Button onClick={() => setShowAddEditInfoDialog(true)}>
        <Plus size={20} className="mr-2" />
        Add Info
      </Button>
      <AIChatButton />
      <AddEditInfoDialog
        open={showAddEditInfoDialog}
        setOpen={setShowAddEditInfoDialog}
      />
    </div>
  );
}
