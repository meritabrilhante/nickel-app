import { paginate } from "blitz"
import { resolver } from "@blitzjs/rpc"
import db, { Prisma } from "db"

interface GetEmblemsInput
  extends Pick<Prisma.EmblemFindManyArgs, "where" | "orderBy" | "skip" | "take"> {}

export default resolver.pipe(
  resolver.authorize(),
  async ({ where, orderBy, skip = 0, take = 100 }: GetEmblemsInput) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const {
      items: emblems,
      hasMore,
      nextPage,
      count,
    } = await paginate({
      skip,
      take,
      count: () => db.emblem.count({ where }),
      query: (paginateArgs) => db.emblem.findMany({ ...paginateArgs, where, orderBy }),
    })

    return {
      emblems,
      nextPage,
      hasMore,
      count,
    }
  }
)
