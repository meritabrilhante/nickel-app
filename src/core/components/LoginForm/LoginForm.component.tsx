import { Input } from "@/app/presentation/components/layout/atoms/input";
import { Box, Stack, styled } from "@mui/material";
import { Button } from "@/app/presentation/components/layout/atoms/button";
import { useRouter } from "next/router";

const SimpleLayoutContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "80px",
  marginTop: "40px",
}));

export const LoginForm = () => {
  const router = useRouter();

  const handleLoginClick = () => {
    router.push("/explore");
  };

  const handleSignUpClick = () => {
    router.push("/auth/signup");
  };

  return (
    <SimpleLayoutContainer>
      <Stack spacing={6}>
        <Input label={"E-mail* (obrigatório)"} placeholder={"johndoe@example.com"} type={"email"} />

        <Input
          label={"Senha* (obrigatório)"}
          placeholder={"*********"}
          message={"A senha deve ter no mínimo 8 caracteres"}
          type="password"
        />
      </Stack>

      <Stack spacing={2}>
        <Button
          buttonClass={"primary"}
          size={"large"}
          type="submit"
          id={"login"}
          onClick={handleLoginClick}
          aria-label="Entrar"
        >
          Entrar
        </Button>
        <p>
          Ainda não tem uma conta?
          <a
            onClick={handleSignUpClick}
            id={"signup"}
            style={{
              color: "var(--color-primary-light)",
              paddingLeft: "8px",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            Crie uma conta
          </a>
        </p>
      </Stack>
    </SimpleLayoutContainer>
  );
};

export default LoginForm;
