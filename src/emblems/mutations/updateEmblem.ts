import { resolver } from "@blitzjs/rpc"
import db from "db"
import { UpdateEmblemSchema } from "../schemas"

export default resolver.pipe(
  resolver.zod(UpdateEmblemSchema),
  resolver.authorize(),
  async ({ id, ...data }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const emblem = await db.emblem.update({ where: { id }, data })

    return emblem
  }
)
