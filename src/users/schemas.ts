import { z } from "zod";

export const CreateUserSchema = z.object({
  id: z.string(),
  email: z.string(),
  first_name: z.string(),
  last_name: z.string(),
  password: z.string(),
  role: z.string(),
});

export const UpdateUserSchema = z.object({
  id: z.number(),
  // template: __fieldName__: z.__zodType__(),
});

export const DeleteUserSchema = z.object({
  id: z.number(),
});
