import { z } from "zod";

// Define the enum for Role
const Role = z.enum(["APPLICANT", "RECRUITER"]);

// Define the User DTO
export const CreateUserDto = z.object({
  id: z.number(),
  profile_image_url: z.string().optional(),
  FirstName: z.string(),
  LastName: z.string(),
  email: z.string(),
  birthDate: z.date(),
  address: z.string().optional(),
  yearsOfWorkExperience: z.number().nullable().optional(),
  willingToWorkInOffice: z.boolean().nullable().optional(),
  experienceInField: z.boolean().nullable().optional(),
  role: Role.optional(),

  // Relationships (assuming these are arrays of IDs)
  applications: z.array(z.number()),
  JobRecruiter: z.array(z.number()),
});

export const UpdateUserDto = CreateUserDto.partial({})
