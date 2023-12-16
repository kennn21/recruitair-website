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
import { toast } from 'sonner';
import ClipLoader from "react-spinners/ClipLoader";


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
import { GetCurrentUserProfile, SwitchRole, UpdateUserProfile } from "@/actions/user"
import { User } from "@/types/user"
import { useEffect, useState } from "react"
import { useUser } from "@clerk/nextjs"
import { Role } from "@prisma/client"

const EditProfileForm = () => {
    const [userProfile, setUserProfile] = useState<User | null>(null);

    const fetchUserProfile = async () => {
        console.log("fetching")
        const profile = await GetCurrentUserProfile();
        setUserProfile(profile);
      };

    useEffect(() => {
      fetchUserProfile();
    }, []);
  
    const form = useForm<User>({
      defaultValues: userProfile || {},
    })

    const refetch = async () => {
        await fetchUserProfile();
      };

    useEffect(() => {
        form.reset(userProfile || {})
      }, [userProfile, form])

    const onSubmit = async (data: User) => {
      try {
        // console.log(data);
        await UpdateUserProfile(data);
      } catch(e) {
        console.log("Error while creating application ", e);
      }
    }
    return ( 
        userProfile ?
        <>
            <h2>{userProfile?.FirstName}</h2>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <div className="grid grid-cols-2 gap-x-56"> 
                    <FormField
                        control={form.control}
                        name="address"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Address</FormLabel>
                            <FormControl>
                            <Input placeholder="Input Address" {...field} className="w-full" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="birthDate"
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
                        name="yearsOfWorkExperience"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>How many year(s) of work experience do you have?</FormLabel>
                            <FormControl>
                                <Input
                                placeholder="Input Year(s)"
                                {...field}
                                value={field.value ? field.value : undefined}
                                type="number"/>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="willingToWorkInOffice"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Are you willing to work in the office (WFO)?</FormLabel>
                            <Select key={field?.value?.toString()} onValueChange={field.onChange} defaultValue={field.value ? 'true' : 'false'}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value='true'>Yes</SelectItem>
                                    <SelectItem value='false'>No</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="experienceInField"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Do you have any experience in this field?</FormLabel>
                            <Select key={field?.value?.toString()} onValueChange={field.onChange} defaultValue={field.value ?  'true' : 'false'}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value='true'>Yes</SelectItem>
                                    <SelectItem value='false'>No</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    <div className="flex flex-col items-center">
                    <Button type="submit" className="w-40 text-center">Apply</Button>
                    </div>

                </form>
                </Form>
                <Button
                    onClick={
                        async () => {
                            const res = await SwitchRole(userProfile?.role === "APPLICANT" ? "RECRUITER" as Role : "APPLICANT" as Role)

                            if(!res.error) {
                                refetch()
                                return toast(`Changed to ${res.message}`)
                            }
                            toast(`Failed ${res.error}`)
                        } 
                    }
                >
                    {
                        userProfile?.role === "APPLICANT" ?
                        "Switch to Recruiter" :
                        "Switch to Applicant"
                    }
                </Button>
        </>
        :
        <div className="flex justify-center items-center min-h-[90vh]">
            <ClipLoader
            loading={true}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
        </div>
     )
}
 
export default EditProfileForm;