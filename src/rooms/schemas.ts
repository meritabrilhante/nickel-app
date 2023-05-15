import { z } from "zod"

export const CreateRoomSchema = z.object({
  // template: __fieldName__: z.__zodType__(),
})
export const UpdateRoomSchema = z.object({
  id: z.number(),
  // template: __fieldName__: z.__zodType__(),
})

export const DeleteRoomSchema = z.object({
  id: z.number(),
})
