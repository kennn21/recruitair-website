"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CalendarIcon, ReloadIcon } from "@radix-ui/react-icons"
import { Calendar } from "@/components/ui/calendar"
import { cn } from "@/lib/utils"
import React , {useState} from "react"
import { format } from "date-fns"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from 'sonner';
import { useRouter } from "next/navigation";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { JobType, jobSchema } from "@/types/schema/jobSchema"
import { createJob } from "@/actions/job"
import { boolean } from "zod"

const AddJobTable = () => {

  const [open, setOpen] = useState(false);

  const openChangeWrapper = (value: boolean) => {
    setOpen(value);
    form.reset();
  };

  const form = useForm<JobType>({
    resolver: zodResolver(jobSchema),
    defaultValues: {
    },
  })

  const router = useRouter();

  const onSubmit = async (data: JobType) => {
    try {
      await createJob(data);
      toast.message('Success', {
        description: 'Added Job Successfully!',
      })
      openChangeWrapper(false);
      router.refresh();
    } catch (e) {
      toast.error('Error Adding Job!')
    }
  };


    return (
        <Dialog 
          open={open} 
          onOpenChange={openChangeWrapper}
          >
      <DialogTrigger asChild>
        <Button variant="outline">Add Job</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
      <Form {...form}>
      <form id="jobForm" onSubmit={form.handleSubmit(onSubmit)}>
        <DialogHeader>
          <DialogTitle>Create New Job</DialogTitle>
          <DialogDescription>
            Add new job here. Click save when you are done.
          </DialogDescription>
        </DialogHeader>
            <div className="grid gap-4 py-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                    <FormItem>
                        <FormControl>
                        <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="title" className="text-right">
                        Job Title
                        </Label>
                        <Input 
                            id="title" 
                            className="col-span-3"    
                            placeholder="Input Job Title" {...field}
                            />
                        </div>
                        </FormControl>
                    </FormItem>
              )}
              />

              <FormField
                control={form.control}
                name="imageUrl"
                render={({ field }) => (
                    <FormItem>
                        <FormControl>
                        <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="imageUrl" className="text-right">
                        Image Url
                        </Label>
                        <Input 
                            id="imageUrl" 
                            className="col-span-3"    
                            placeholder="Input Image Url" {...field}
                            />
                        </div>
                        </FormControl>
                    </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="startDate"
                render={({ field }) => (
                    <FormItem>
                        <FormControl>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="startDate" className="text-right">
                            Start Date
                            </Label>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button
                                    variant={"outline"}
                                    className={cn(
                                        "w-full col-span-3",
                                        !field.value && "text-muted-foreground"
                                    )}
                                    >
                                    {field.value ? (
                                        format(field.value, "PPP")
                                    ) : (
                                        <span>Pick a date</span>
                                    )}   
                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-full p-0" align="start">
                                <Calendar
                                    mode="single"
                                    captionLayout="dropdown-buttons"
                                    selected={field.value}
                                    onSelect={field.onChange}
                                    fromYear={1960}
                                    toYear={2030}
                                />
                                </PopoverContent>
                            </Popover>
                        </div>
                        </FormControl>
                    </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="endDate"
                render={({ field }) => (
                    <FormItem>
                        <FormControl>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="endDate" className="text-right">
                            End Date
                            </Label>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button
                                    variant={"outline"}
                                    className={cn(
                                        "w-full col-span-3",
                                        !field.value && "text-muted-foreground"
                                    )}
                                    >
                                    {field.value ? (
                                        format(field.value, "PPP")
                                    ) : (
                                        <span>Pick a date</span>
                                    )}   
                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-full p-0" align="start">
                                <Calendar
                                    mode="single"
                                    captionLayout="dropdown-buttons"
                                    selected={field.value}
                                    onSelect={field.onChange}
                                    fromYear={1960}
                                    toYear={2030}
                                />
                                </PopoverContent>
                            </Popover>
                        </div>
                        </FormControl>
                    </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                    <FormItem>
                        <FormControl>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="description" className="text-right">
                            Description
                            </Label>
                            <Input 
                                id="description" 
                                className="col-span-3"    
                                placeholder="Input Job Description" {...field}
                                />
                        </div>
                        </FormControl>
                    </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="requirements"
                render={({ field }) => (
                    <FormItem>
                        <FormControl>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="requirements" className="text-right">
                            Requirements
                            </Label>
                            <Input 
                                id="requirements" 
                                className="col-span-3"    
                                placeholder="Input Job Requirements" {...field}
                                />
                        </div>
                        </FormControl>
                    </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                    <FormItem>
                        <FormControl>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="location" className="text-right">
                            Location
                            </Label>
                            <Input 
                                id="location" 
                                className="col-span-3"    
                                placeholder="Input Job Location" {...field}
                                />
                        </div>
                        </FormControl>
                    </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="salary"
                render={({ field }) => (
                    <FormItem>
                        <FormControl>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="salary" className="text-right">
                            Salary
                            </Label>
                            <Input 
                                id="salary"
                                type="number"
                                className="col-span-3"    
                                placeholder="Input Job Salary" {...field}
                                />
                        </div>
                        </FormControl>
                    </FormItem>
                )}
              />
            </div>

        <DialogFooter>
          <Button 
          disabled={form.formState.isSubmitting}
          type="submit" 
          onClick={form.handleSubmit(onSubmit)}>
            Save
            {form.formState.isSubmitting && (
              <ReloadIcon className="animate-spin h-4 w-4 ml-2" />
            )}
          </Button>
        </DialogFooter>

      </form>
      </Form>
      </DialogContent>
    </Dialog>
    )

}

export default AddJobTable;