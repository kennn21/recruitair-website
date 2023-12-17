import { CreateInfoSchema, createInfoSchema } from "@/lib/validation/info";
import { zodResolver } from "@hookform/resolvers/zod";
import { Info } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import LoadingButton from "@/components/ui/loading-button";
import { Textarea } from "@/components//ui/textarea";

interface AddEditInfoDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  infoToEdit?: Info;
}

export default function AddEditInfoDialog({
  open,
  setOpen,
  infoToEdit,
}: AddEditInfoDialogProps) {
  const [deleteInProgress, setDeleteInProgress] = useState(false);

  const router = useRouter();

  const form = useForm<CreateInfoSchema>({
    resolver: zodResolver(createInfoSchema),
    defaultValues: {
      title: infoToEdit?.title || "",
      content: infoToEdit?.content || "",
    },
  });

  async function onSubmit(input: CreateInfoSchema) {
    try {
      if (infoToEdit) {
        const response = await fetch("/api/info", {
          method: "PUT",
          body: JSON.stringify({
            id: infoToEdit.id,
            ...input,
          }),
        });
        if (!response.ok) throw Error("Status code: " + response.status);
      } else {
        const response = await fetch("/api/info", {
          method: "POST",
          body: JSON.stringify(input),
        });
        if (!response.ok) throw Error("Status code: " + response.status);
        form.reset();
      }
      router.refresh();
      setOpen(false);
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    }
  }

  async function deleteInfo() {
    if (!infoToEdit) return;
    setDeleteInProgress(true);
    try {
      const response = await fetch("/api/info", {
        method: "DELETE",
        body: JSON.stringify({
          id: infoToEdit.id,
        }),
      });
      if (!response.ok) throw Error("Status code: " + response.status);
      router.refresh();
      setOpen(false);
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setDeleteInProgress(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{infoToEdit ? "Edit Info" : "Add Info"}</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Info title</FormLabel>
                  <FormControl>
                    <Input placeholder="Info title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Info content</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Info content" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter className="gap-1 sm:gap-0">
              {infoToEdit && (
                <LoadingButton
                  variant="destructive"
                  loading={deleteInProgress}
                  disabled={form.formState.isSubmitting}
                  onClick={deleteInfo}
                  type="button"
                >
                  Delete Info
                </LoadingButton>
              )}
              <LoadingButton
                type="submit"
                loading={form.formState.isSubmitting}
                disabled={deleteInProgress}
              >
                Submit
              </LoadingButton>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
