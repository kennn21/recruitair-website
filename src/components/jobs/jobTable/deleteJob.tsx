"use client"

import { Button } from "@/components/ui/button"
import { Job } from "@prisma/client"
import { toast } from 'sonner';
import { useRouter } from "next/navigation";
import { deleteJob } from "@/actions/job"
import { useTransition } from "react";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"


interface Props {
  job: Job
}

const DeleteJobTable = ({ job }: Props) => {

  const [isLoading, startTransition] = useTransition();

  const router = useRouter();

  const onSubmit = async () => {
    try {
      await deleteJob(job.id);
      toast.message('Success', {
        description: "Deleted Job Successfully!",
      })
      router.refresh();
    } catch (e) {
      console.log(e)
      toast.warning('Error Deleting Job!')
    }
  };

    return (
        <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="outline" className="text-red-500 border-red-500 hover:bg-red-500 hover:text-white">Delete</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              selected job and remove it from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction 
              onClick={() => {
                startTransition(onSubmit);
              }} 
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
}

export default DeleteJobTable;