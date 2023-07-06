import { Input } from "@/app/presentation/components/layout/atoms/input";
import { Box, Stack, styled } from "@mui/material";

const SimpleLayoutContainer = styled(Box)(() => ({
  display: "flex",
  gap: "40px",
  flexDirection: "column",
  paddingBottom: "80px",
  paddingTop: "40px",
}));

export const LoginForm = () => {
  return (
    <SimpleLayoutContainer>
      <Input label={"E-mail* (obrigatório)"} />
      <Input label={"Senha* (obrigatório)"} message={"A senha deve ter no mínimo 8 caracteres"} />
    </SimpleLayoutContainer>
  );
};

export default LoginForm;
