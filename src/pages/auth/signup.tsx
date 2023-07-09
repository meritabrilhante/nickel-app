import { useRouter } from "next/router";
import { Box, Stack, styled } from "@mui/material";
import { Button } from "@/app/presentation/components/layout/atoms/button";
import SimpleLayout from "@/app/presentation/components/layout/simpleLayout/SimpleLayout.component";
import { LoginForm } from "@/core/components/LoginForm";
import React, { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { SignupInfosForm } from "@/core/components/SignupInfosForm";
import { Textarea } from "@/app/presentation/components/layout/atoms/textarea";
import { TextIcon } from "@/app/presentation/components/layout/atoms/text-icon";

const SignupContainer = styled(Box)(() => ({
  width: "50%",
  display: "flex",
  flexDirection: "column",
  margin: "auto 0",
}));

const Breadcrumb = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  margin: "auto 0",
  gap: "5px",
  marginBottom: "20px",
}));

const SignupPage = () => {
  const [mostrarComponenteSignup, setmostrarComponenteSignup] = useState(true);

  const alternarComponente = () => {
    setmostrarComponenteSignup(!mostrarComponenteSignup);
  };

  const [mostrarDescricao, setmostrarDescricao] = useState(false);

  const router = useRouter();

  const handleGoOn = () => {
    setmostrarComponenteSignup(false);
    setmostrarDescricao(true);
  };

  const handleGoBack = () => {
    setmostrarComponenteSignup(false);
    setmostrarDescricao(false);
  };

  const handleWellcomePage = () => {
    router.push("/auth/wellcome");
  };

  return (
    <SimpleLayout width={"100%"}>
      {mostrarComponenteSignup ? (
        <SignupContainer>
          <p>Nickel App</p>
          <h1>Cadastre-se</h1>

          <Stack spacing={1}>
            <LoginForm />
          </Stack>

          <Stack spacing={2}>
            <Button buttonClass={"primary"} size={"medium"} onClick={alternarComponente}>
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
      ) : mostrarDescricao ? (
        <>
          <SignupContainer>
            <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
              <Breadcrumb>
                <TextIcon iconName="FiArrowRight" text="Cadastrar" iconPosition="right" />
                <TextIcon iconName="FiArrowRight" text="Informações" iconPosition="right" />
                <strong>Descrição</strong>
              </Breadcrumb>
              <p>Nickel App</p>
              <h1>Descrição</h1>
              <p>Adicione uma breve descrição sobre você</p>
            </div>
            <Textarea placeholder="Sua descrição aqui"></Textarea>
            <Stack spacing={2}>
              <Button buttonClass={"primary"} onClick={handleWellcomePage}>
                Continuar
              </Button>
              <Button buttonClass={"tertiary"} onClick={handleGoBack}>
                <center>
                  <BsArrowLeft /> Cancelar
                </center>
              </Button>
            </Stack>
          </SignupContainer>
        </>
      ) : (
        <SignupContainer>
          <Breadcrumb>
            <TextIcon iconName="FiArrowRight" text="Cadastrar" iconPosition="right" />
            <strong>Informações</strong>
          </Breadcrumb>
          <p>Nickel App</p>
          <h1>Informações</h1>

          <Stack spacing={1}>
            <SignupInfosForm />
          </Stack>

          <Stack
            style={{
              gap: "10px",
              display: "flex",
              alignContent: "center",
            }}
          >
            <Button buttonClass={"primary"} onClick={handleGoOn} size="medium">
              <center>
                <BsArrowRightCircleFill style={{ opacity: "0%" }} /> Continuar
              </center>
            </Button>
            <Button buttonClass={"tertiary"} onClick={alternarComponente} size="medium">
              <center>
                <BsArrowLeft /> Cancelar
              </center>
            </Button>
          </Stack>
        </SignupContainer>
      )}
    </SimpleLayout>
  );
};

export default SignupPage;
