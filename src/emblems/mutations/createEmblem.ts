import { resolver } from "@blitzjs/rpc"
import db from "db"
import { CreateEmblemSchema } from "../schemas"

export default resolver.pipe(
  resolver.zod(CreateEmblemSchema),
  resolver.authorize(),
  async (input) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const emblem = await db.emblem.create({ data: input })

    return emblem
  }
)
