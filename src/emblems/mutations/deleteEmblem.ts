import { resolver } from "@blitzjs/rpc"
import db from "db"
import { DeleteEmblemSchema } from "../schemas"

export default resolver.pipe(
  resolver.zod(DeleteEmblemSchema),
  resolver.authorize(),
  async ({ id }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const emblem = await db.emblem.deleteMany({ where: { id } })

    return emblem
  }
)
