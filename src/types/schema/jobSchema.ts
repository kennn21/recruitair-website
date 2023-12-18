import * as z from "zod";

export const jobSchema = z.object({
  title: z.string(),
  imageUrl: z.string(),
  startDate: z.date(),
  endDate: z.date(),
  description: z.string().max(255),
  requirements: z.string().max(255),
  location: z.string(),
  salary: z.coerce.number(),
});

export type JobType = z.infer<typeof jobSchema>;

export const updateJobSchema = jobSchema.partial({})

export type updateJobType = z.infer<typeof updateJobSchema>