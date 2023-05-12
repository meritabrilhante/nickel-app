import { z } from "zod"

export const CreateEmblemSchema = z.object({
  // template: __fieldName__: z.__zodType__(),
})
export const UpdateEmblemSchema = z.object({
  id: z.number(),
  // template: __fieldName__: z.__zodType__(),
})

export const DeleteEmblemSchema = z.object({
  id: z.number(),
})
