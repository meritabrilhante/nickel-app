import { SecurePassword } from "@blitzjs/auth/secure-password"
import { resolver } from "@blitzjs/rpc"
import db from "db"
import { Signup } from "../schemas"

export default resolver.pipe(resolver.zod(Signup), async ({ email, password }, ctx) => {
  const hashedPassword = await SecurePassword.hash(password.trim())
  const user = await db.user.create({
    data: { email: email.toLowerCase().trim(), password, first_name: "test", last_name: "test" },
    select: { id: true, first_name: true, last_name: true, email: true },
  })

  await ctx.session.$create({ userId: user.id })
  return user
})
