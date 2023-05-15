import { resolver } from "@blitzjs/rpc"
import db from "db"
import { DeleteRoomSchema } from "../schemas"

export default resolver.pipe(
  resolver.zod(DeleteRoomSchema),
  resolver.authorize(),
  async ({ id }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const room = await db.room.deleteMany({ where: { id } })

    return room
  }
)
