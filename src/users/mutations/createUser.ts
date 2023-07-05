import { resolver } from "@blitzjs/rpc";
import { NotFoundError } from "blitz";
import db from "db";
import { CreateUserSchema } from "../schemas";

export default resolver.pipe(resolver.zod(CreateUserSchema), async (input) => {
  const user = await db.user.create({ data: input });

  return user;
});
