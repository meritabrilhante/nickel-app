import { useRouter } from "next/router";
import { Box, Stack, styled } from "@mui/material";
import { Button } from "@/app/presentation/components/layout/atoms/button";
import SimpleLayout from "@/app/presentation/components/layout/simpleLayout/SimpleLayout.component";
import React, { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { SignupInfosForm } from "@/core/components/SignupInfosForm";
import { Textarea } from "@/app/presentation/components/layout/atoms/textarea";
import { TextIcon } from "@/app/presentation/components/layout/atoms/text-icon";
import { Input } from "@/app/presentation/components/layout/atoms/input";

const SignupContainer = styled(Box)(() => ({
  display: "flex",
  margin: "auto 0",
  flexDirection: "column",
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
  const [mostrarDescricao, setmostrarDescricao] = useState(false);

  const alternarComponente = () => {
    setmostrarComponenteSignup(!mostrarComponenteSignup);
  };

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
          <h1 style={{ marginBottom: "4vh" }}>Cadastre-se</h1>

          <Stack spacing={1} style={{ marginBottom: "10vh" }}>
            <Stack spacing={6}>
              <Input
                label={"E-mail* (obrigatório)"}
                placeholder={"johndoe@example.com"}
                type={"email"}
              />

              <Input
                label={"Senha* (obrigatório)"}
                placeholder={"*********"}
                message={"A senha deve ter no mínimo 8 caracteres"}
                type="password"
              />
            </Stack>
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
