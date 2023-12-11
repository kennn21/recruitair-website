import * as z from "zod"

export const createApplicationSchema = z.object({
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
  })

export type createApplicationSchemaType = z.infer<typeof createApplicationSchema>; 