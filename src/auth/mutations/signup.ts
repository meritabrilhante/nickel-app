import db from "db";

import { SecurePassword } from "@blitzjs/auth/secure-password";
import { resolver } from "@blitzjs/rpc";

import { Role } from "types";

import { Signup } from "../schemas";

interface UserProps {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  role: Role;
}

export default resolver.pipe(
  resolver.zod(Signup),
  async ({ first_name, last_name, email, password, role }: UserProps, ctx) => {
    const hashedPassword = await SecurePassword.hash(password.trim());

    const user = await db.user.create({
      data: {
        email: email.toLowerCase().trim(),
        first_name: first_name,
        last_name: last_name,
        password: hashedPassword,
        role: role,
      },
      select: {
        id: true,
        first_name: true,
        last_name: true,
        email: true,
        role: true,
      },
    });

    await ctx.session.$create({ userId: user.id, role: user.role as Role });
    return user;
  }
);
