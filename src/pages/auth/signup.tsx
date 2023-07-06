import { useRouter } from "next/router"
import { Box, Stack, styled } from "@mui/material"
import { Button } from "@/app/presentation/components/layout/atoms/button"
import SimpleLayout from "@/app/presentation/components/layout/simpleLayout/SimpleLayout.component"
import { LoginForm } from "@/core/components/LoginForm"

const SignupContainer = styled(Box)(() => ({
  width: "50%",
  display: "flex",
  flexDirection: "column",
  margin: "auto 0",
}))

const SignupPage = () => {
  const router = useRouter()

  const handleClick = () => {
    router.push("/auth/signupInfos")
  }

  return (
    <SimpleLayout width={"100%"}>
      <SignupContainer>
        <p>Nickel App</p>
        <h1>Cadastre-se</h1>

        <Stack spacing={1}>
          <LoginForm />
        </Stack>

        <Stack spacing={2}>
          <Button buttonClass={"primary"} onClick={handleClick}>
            Criar conta
          </Button>
          <p>
            Já tem uma conta?{" "}
            <a
              href="/auth/login"
              style={{ color: "var(--color-primary-pure)", textDecoration: "none" }}
            >
              Faça o login
            </a>
          </p>
        </Stack>
      </SignupContainer>
    </SimpleLayout>
  )
}

export default SignupPage
