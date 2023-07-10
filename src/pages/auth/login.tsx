import { Box, Stack, styled } from "@mui/material";
import SimpleLayout from "@/app/presentation/components/layout/simpleLayout/SimpleLayout.component";
import { LoginForm } from "@/core/components/LoginForm";

const LoginContainer = styled(Box)(() => ({
  display: "flex",
  margin: "auto 0",
  flexDirection: "column",
}));

const LoginPage = () => {
  return (
    <SimpleLayout width={"100%"}>
      <LoginContainer>
        <Stack spacing={1}>
          <p>Nickel App</p>
          <h1>Faça o Login</h1>
        </Stack>

        <LoginForm />
      </LoginContainer>
    </SimpleLayout>
  );
};

export default LoginPage;
