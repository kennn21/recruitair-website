"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { cn } from "@/lib/utils"
import { CaretSortIcon, CheckIcon, CalendarIcon } from "@radix-ui/react-icons"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Calendar } from "@/components/ui/calendar"
import Link from "next/link"
import { format } from "date-fns"
import { createApplicationSchema, createApplicationSchemaType } from "@/types/schema/createApplication"

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
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { createApplication } from "@/actions/application"

const JobForm = () => {
    const form = useForm<createApplicationSchemaType>({
        resolver: zodResolver(createApplicationSchema),
        defaultValues: {
        },
      })

    const onSubmit = async (data: createApplicationSchemaType) => {
      try {
        console.log(data);
        await createApplication(data);
      } catch(e: any) {
        alert("ERROR!");
        console.log("Error while creating application ", e);
      }
    }

  return (
    <Form {...form}>
  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      <FormField
        control={form.control}
        name="username"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Username</FormLabel>
            <FormControl>
              <Input placeholder="Input Username" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input placeholder="Input Email" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

    <div className="grid grid-cols-2 gap-x-56"> 
      <FormField
        control={form.control}
        name="phoneNumber"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Phone Number</FormLabel>
            <FormControl>
              <Input placeholder="Input Phone Number" {...field} className="w-full" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="dob"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Date of Birth</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full",
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
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
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
            <FormMessage />
          </FormItem>
        )}
      />
    </div>

    <FormField
        control={form.control}
        name="workExperiences"
        render={({ field }) => (
          <FormItem>
            <FormLabel>How many year(s) of work experience do you have?</FormLabel>
            <FormControl>
              <Input placeholder="Input Year(s)" {...field} type="number"/>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

    <FormField
        control={form.control}
        name="isWorkInOffice"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Are you willing to work in the office (WFO)?</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                    <SelectTrigger>
                        <SelectValue placeholder="Select" />
                    </SelectTrigger>
                </FormControl>
                <SelectContent>
                    <SelectItem value="YES">Yes</SelectItem>
                    <SelectItem value="NO">No</SelectItem>
                </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

    <FormField
        control={form.control}
        name="isHaveExperience"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Do you have any experience in this field?</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                    <SelectTrigger>
                        <SelectValue placeholder="Select" />
                    </SelectTrigger>
                </FormControl>
                <SelectContent>
                    <SelectItem value="YES">Yes</SelectItem>
                    <SelectItem value="NO">No</SelectItem>
                </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

        <div className="flex items-center space-x-2">
          <Checkbox className="text-gray-600 dark:text-gray-400" id="agreement" required />
          <label className="text-sm font-normal text-gray-600 dark:text-gray-400" htmlFor="agreement">
            By clicking here, I state that I have read and understood the
            <Link className="underline underline-offset-2 text-gray-600 dark:text-gray-400" href="#">
              &nbsp;Terms & Conditions.
            </Link>
          </label>
        </div>
    
    <div className="flex flex-col items-center">
      <Button type="submit" className="w-40 text-center">Apply</Button>
    </div>

  </form>
</Form>

  )
}

export default JobForm;
