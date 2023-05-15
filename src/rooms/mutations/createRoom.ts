import { resolver } from "@blitzjs/rpc"
import db from "db"
import { CreateRoomSchema } from "../schemas"

export default resolver.pipe(
  resolver.zod(CreateRoomSchema),
  resolver.authorize(),
  async (input) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const room = await db.room.create({ data: input })

    return room
  }
)
