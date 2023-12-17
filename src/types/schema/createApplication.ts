import * as z from "zod"

export const createApplicationSchema = z.object({
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