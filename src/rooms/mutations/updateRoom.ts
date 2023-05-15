import { resolver } from "@blitzjs/rpc"
import db from "db"
import { UpdateRoomSchema } from "../schemas"

export default resolver.pipe(
  resolver.zod(UpdateRoomSchema),
  resolver.authorize(),
  async ({ id, ...data }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const room = await db.room.update({ where: { id }, data })

    return room
  }
)
