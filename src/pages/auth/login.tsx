import { useRouter } from "next/router";
import { Box, Stack, styled } from "@mui/material";
import { Button } from "@/app/presentation/components/layout/atoms/button";
import SimpleLayout from "@/app/presentation/components/layout/simpleLayout/SimpleLayout.component";
import { LoginForm } from "@/core/components/LoginForm";

const LoginContainer = styled(Box)(() => ({
  width: "50%",
  display: "flex",
  flexDirection: "column",
  margin: "auto 0",
}));

const LoginPage = () => {
  const router = useRouter();

  return (
    <SimpleLayout width={"100%"}>
      <LoginContainer>
        <p>Nickel App</p>
        <h1>Faça o Login</h1>

        <Stack spacing={1}>
          <LoginForm />
        </Stack>

        <Stack spacing={2}>
          <Button buttonClass={"primary"}>Entrar</Button>
          <p>
            Ainda não tem uma conta?<a>Crie uma conta</a>
          </p>
        </Stack>
      </LoginContainer>
    </SimpleLayout>
  );
};

export default LoginPage;
