import { Input } from "@/app/presentation/components/layout/atoms/input";
import React, { Suspense } from "react";
import { Form, FormProps } from "src/core/components/Form";

import { z } from "zod";
export { FORM_ERROR } from "src/core/components/Form";

export function UserForm<S extends z.ZodType<any, any>>(props: FormProps<S>) {
  return (
    <Form<S> {...props}>
      <Input label={"first_name"} />
      <Input label={"last_name"} />
    </Form>
  );
}
