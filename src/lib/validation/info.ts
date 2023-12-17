import { z } from "zod";

export const createInfoSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  content: z.string().optional(),
});

export type CreateInfoSchema = z.infer<typeof createInfoSchema>;

export const updateInfoSchema = createInfoSchema.extend({
  id: z.string().min(1),
});

export const deleteInfoSchema = z.object({
  id: z.string().min(1),
});
