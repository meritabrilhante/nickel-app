import { SecurePassword } from "@blitzjs/auth/secure-password"
import { resolver } from "@blitzjs/rpc"
import db from "db"
import { Signup } from "../schemas"

export default resolver.pipe(
  resolver.zod(Signup),
  async ({ email, password, first_name, last_name }, ctx) => {
    const hashedPassword = await SecurePassword.hash(password.trim())
    const user = await db.user.create({
      data: { email: email.toLowerCase().trim(), password, first_name, last_name },
      select: { id: true, first_name: true, last_name: true, email: true, password: true },
    })

    await ctx.session.$create({ userId: user.id })
    return user
  }
)
