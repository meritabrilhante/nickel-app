import { Routes } from "@blitzjs/next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMutation } from "@blitzjs/rpc";
import { CreateUserSchema } from "src/users/schemas";
import createUser from "src/users/mutations/createUser";
import { UserForm, FORM_ERROR } from "src/users/components/UserForm";
import { Suspense } from "react";

const NewUserPage = () => {
  const router = useRouter();
  const [createUserMutation] = useMutation(createUser);

  return (
    <>
      <h1>Cadastre-se</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <UserForm
          submitText="Create User"
          schema={CreateUserSchema}
          onSubmit={async (values) => {
            try {
              const user = await createUserMutation(values);
              await router.push(Routes.ShowUserPage({ userId: user.id }));
            } catch (error: any) {
              console.error(error);
              return {
                [FORM_ERROR]: error.toString(),
              };
            }
          }}
        />
      </Suspense>
    </>
  );
};

NewUserPage.authenticate = true;

export default NewUserPage;
