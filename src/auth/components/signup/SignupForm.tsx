import { Form, FORM_ERROR } from "src/core/components/Form";
import signup from "src/auth/mutations/signup";
import { Signup } from "src/auth/schemas";
import { useMutation } from "@blitzjs/rpc";
import { Input } from "@/app/presentation/components/layout/atoms/input";
import Footer from "@/app/presentation/components/layout/footer/Footer.component";

type SignupFormProps = {
  onSuccess?: () => void;
};

export const SignupForm = (props: SignupFormProps) => {
  const [signupMutation] = useMutation(signup);
  return (
    <div
      style={{
        maxWidth: "1140px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        gap: "32px",
      }}
    >
      <p>Nickelapp</p>
      <h1>Cadastre-se</h1>

      <Form
        submitText="Create Account"
        schema={Signup}
        initialValues={{ email: "", password: "" }}
        onSubmit={async (values) => {
          try {
            await signupMutation(values);
            props.onSuccess?.();
          } catch (error: any) {
            if (error.code === "P2002" && error.meta?.target?.includes("email")) {
              return { email: "This email is already being used" };
            } else {
              return { [FORM_ERROR]: error.toString() };
            }
          }
        }}
      >
        <Input name="email" label="Email" placeholder="Email" />
        <Input name="password" label="Password" placeholder="Password" type="password" />

        <Input name="name" label="name" placeholder="name" type="text" />

        <p>
          Já tem uma conta? <a>Faça o login</a>
        </p>
      </Form>

      <Footer width={"100%"} />
    </div>
  );
};

export default SignupForm;
