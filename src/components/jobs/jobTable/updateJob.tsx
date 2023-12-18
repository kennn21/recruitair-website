"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CalendarIcon, ReloadIcon } from "@radix-ui/react-icons"
import { Calendar } from "@/components/ui/calendar"
import { cn } from "@/lib/utils"
import React, { useState } from "react"
import { format } from "date-fns"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation";
import { JobType, jobSchema, updateJobSchema, updateJobType } from "@/types/schema/jobSchema"
import { toast } from 'sonner';
import { Job } from "@prisma/client"
import { updateJob } from "@/actions/job"

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

interface Props {
  jobProp: Job
}

const UpdateJobTable = ({ jobProp }: Props) => {

  const [open, setOpen] = useState(false);

  const openChangeWrapper = (value: boolean) => {
    setOpen(value);
    form.reset();
  };

  const form = useForm<updateJobType>({
    resolver: zodResolver(updateJobSchema),
    defaultValues: {
    },
  })

  const router = useRouter();

  const onSubmit = async (data: updateJobType) => {
    try {
      console.log(data)
      await updateJob(jobProp, data);
      toast.message('Success', {
        description: "Updated Job Successfully!",
      })
      openChangeWrapper(false);
      router.refresh();
    } catch (e) {
      toast.error('Error Updating Job!')
    }
  };


    return (
      <Dialog 
      open={open} 
      onOpenChange={openChangeWrapper}
      >
        <DialogTrigger asChild>
          <Button variant="outline" className="text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white">Update</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
        <Form {...form}>
        <form id="jobForm" onSubmit={form.handleSubmit(onSubmit)}>
          <DialogHeader>
            <DialogTitle>Update Job {jobProp.title}</DialogTitle>
            <DialogDescription>
              Update job here. Click save when you're done.
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
                              defaultValue={jobProp.title}
                              onChange={field.onChange}
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
                              defaultValue={jobProp.imageUrl}
                              onChange={field.onChange}
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
                                          !jobProp.startDate && "text-muted-foreground"
                                      )}
                                      >
                                      {jobProp.startDate ? (
                                          format(jobProp.startDate, "PPP")
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
                                      selected={jobProp.startDate}
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
                                          !jobProp.endDate && "text-muted-foreground"
                                      )}
                                      >
                                      {jobProp.endDate ? (
                                          format(jobProp.endDate, "PPP")
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
                                      selected={jobProp.endDate}
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
                                  defaultValue={jobProp.description}
                                  onChange={field.onChange}
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
                                  defaultValue={jobProp.requirements}
                                  onChange={field.onChange}
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
                                  defaultValue={jobProp.location}
                                  onChange={field.onChange}
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
                                  defaultValue={jobProp.salary}
                                  onChange={field.onChange}
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

export default UpdateJobTable;