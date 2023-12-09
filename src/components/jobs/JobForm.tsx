"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { cn } from "@/lib/utils"
import { CaretSortIcon, CheckIcon, CalendarIcon } from "@radix-ui/react-icons"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Calendar } from "@/components/ui/calendar"
import Link from "next/link"
import { format } from "date-fns"

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

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"

const provinces = [
  { label: "Aceh", value: "aceh" },
  { label: "Bali", value: "bali" },
  { label: "Banten", value: "banten" },
  { label: "Bengkulu", value: "bengkulu" },
  { label: "Central Java", value: "central_java" },
  { label: "Central Kalimantan", value: "central_kalimantan" },
  { label: "Central Sulawesi", value: "central_sulawesi" },
  { label: "East Java", value: "east_java" },
  { label: "East Kalimantan", value: "east_kalimantan" },
  { label: "East Nusa Tenggara", value: "east_nusa_tenggara" },
  { label: "Gorontalo", value: "gorontalo" },
  { label: "Jakarta", value: "jakarta" },
  { label: "Jambi", value: "jambi" },
  { label: "Lampung", value: "lampung" },
  { label: "Maluku", value: "maluku" },
  { label: "North Kalimantan", value: "north_kalimantan" },
  { label: "North Maluku", value: "north_maluku" },
  { label: "North Sulawesi", value: "north_sulawesi" },
  { label: "North Sumatra", value: "north_sumatra" },
  { label: "Papua", value: "papua" },
  { label: "Riau", value: "riau" },
  { label: "Riau Islands", value: "riau_islands" },
  { label: "South Kalimantan", value: "south_kalimantan" },
  { label: "South Sulawesi", value: "south_sulawesi" },
  { label: "South Sumatra", value: "south_sumatra" },
  { label: "Southeast Sulawesi", value: "southeast_sulawesi" },
  { label: "West Java", value: "west_java" },
  { label: "West Kalimantan", value: "west_kalimantan" },
  { label: "West Nusa Tenggara", value: "west_nusa_tenggara" },
  { label: "West Papua", value: "west_papua" },
  { label: "West Sulawesi", value: "west_sulawesi" },
  { label: "West Sumatra", value: "west_sumatra" },
  { label: "Yogyakarta", value: "yogyakarta" },
];

const cities = [
  { label: "Jakarta", value: "jakarta" },
  { label: "Surabaya", value: "surabaya" },
  { label: "Medan", value: "medan" },
  { label: "Bandung", value: "bandung" },
  { label: "Semarang", value: "semarang" },
  { label: "Makassar", value: "makassar" },
  { label: "Palembang", value: "palembang" },
  { label: "Tangerang", value: "tangerang" },
  { label: "Depok", value: "depok" },
  { label: "Manado", value: "manado" },
  { label: "Balikpapan", value: "balikpapan" },
  { label: "Yogyakarta", value: "yogyakarta" },
  { label: "Malang", value: "malang" },
  { label: "Banjarmasin", value: "banjarmasin" },
  { label: "Denpasar", value: "denpasar" },
];
  

const formSchema = z.object({
  username: z.string({
    required_error: "Username is required.",
  }),
  email: z.string({
    required_error: "Email is required.",
  }),
  phoneNumber: z.string({
    required_error: "Phone Number is required.",
  }),
  dob: z.date({
    required_error: "A date of birth is required.",
  }),
  workExperiences: z.coerce.number({
        invalid_type_error: "Work Experiences must be a number.",
        required_error: "work Experience is required.",
  }),
  isWorkInOffice : z.string({
    required_error: "work in office is required.",
  }),
  isHaveExperience: z.string({
    required_error: "Experience is required.",
  }),
  address: z.object({
    street: z.string({
      required_error: "Street address is required.",
    }),
    city: z.string({
      required_error: "City is required.",
    }),
    province: z.string({
      required_error: "Province is required.",
    }),
    zipCode: z.coerce.number({
        invalid_type_error: "Zip Code must be a number.",
        required_error: "Zip code is required.",
    })
  }),
  fileCv: typeof window === 'undefined' ? z.null() : z.instanceof(File),
})

const JobForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
        /*   fileCv: new File([], "") */
        },
      })

      function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
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
        name="address.street"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Current Street Address</FormLabel>
            <FormControl>
              <Input placeholder="Input Street Address" {...field} type="text"/>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

    <div className="grid grid-cols-3 gap-x-10"> 
      <FormField
        control={form.control}
        name="address.city"
        render={({ field }) => (
          <FormItem>
            <FormLabel>City</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      aria-required
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-full flex",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      <span className="flex-grow text-left">
                        {field.value
                          ? cities.find(
                              (city) => city.value === field.value
                            )?.label
                          : "Select city"}
                      </span>
                      <CaretSortIcon className="ml-2 w-4 h-4 shrink-0 opacity-50"/>
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0">
                  <Command>
                    <CommandInput
                      placeholder="Search city..."
                      className="h-9 w-full"
                    />
                    <CommandEmpty>No city found.</CommandEmpty>
                    <CommandGroup>
                      {cities.map((city) => (
                        <CommandItem
                          value={city.label}
                          key={city.value}
                          onSelect={() => {
                            form.setValue("address.city", city.value)
                          }}
                        >
                          {city.label}
                          <CheckIcon
                            className={cn(
                              "ml-auto h-4 w-4",
                              city.value === field.value
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="address.province"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Province</FormLabel>
            <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-full flex",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      <span className="flex-grow text-left">
                        {field.value
                          ? provinces.find(
                              (province) => province.value === field.value
                            )?.label
                          : "Select province"}
                      </span>
                      <CaretSortIcon className="ml-2 w-4 h-4 shrink-0 opacity-50"/>
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0">
                  <Command>
                    <CommandInput
                      placeholder="Search province..."
                      className="h-9 w-full"
                    />
                    <CommandEmpty>No province found.</CommandEmpty>
                    <CommandGroup>
                      {provinces.map((province) => (
                        <CommandItem
                          value={province.label}
                          key={province.value}
                          onSelect={() => {
                            form.setValue("address.province", province.value)
                          }}
                        >
                          {province.label}
                          <CheckIcon
                            className={cn(
                              "ml-auto h-4 w-4",
                              province.value === field.value
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="address.zipCode"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Zip Code</FormLabel>
            <FormControl>
              <Input placeholder="Input Zip Code" {...field} className="w-full" type="number" />
            </FormControl>
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

      <FormField
        control={form.control}
        name="fileCv"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Upload CV</FormLabel>
            <FormControl>
              <Input
                required
                accept=".pdf, .docx" 
                className="w-full" 
                type="file" 
                onChange={(e) =>
                  field.onChange(e.target.files ? e.target.files[0] : null)
                }
                />
            </FormControl>
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
