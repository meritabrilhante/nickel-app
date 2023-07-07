import { useRouter } from "next/router";
import { Box, Stack, styled } from "@mui/material";
import { Button } from "@/app/presentation/components/layout/atoms/button";
import SimpleLayout from "@/app/presentation/components/layout/simpleLayout/SimpleLayout.component";
import { SignupInfosForm } from "@/core/components/SignupInfosForm";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRightCircleFill } from "react-icons/bs";

const SignupContainer = styled(Box)(() => ({
  width: "50%",
  display: "flex",
  flexDirection: "column",
  margin: "auto 0",
}));

const SignupPage = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.push("/auth/signup");
  };

  const handleGoOn = () => {
    router.push("/auth/wellcome");
  };

  return (
    <SimpleLayout width={"100%"}>
      <SignupContainer>
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
            alignItems: "center",
            flexDirection: "column",
            margin: "0 auto",
            width: "50%",
          }}
        >
          <Button buttonClass={"primary"} onClick={handleGoOn}>
            <center>
              <BsArrowRightCircleFill style={{ opacity: "0%" }} /> Continuar
            </center>
          </Button>
          <Button buttonClass={"tertiary"} onClick={handleGoBack}>
            <center>
              <BsArrowLeft /> Cancelar
            </center>
          </Button>
        </Stack>
      </SignupContainer>
    </SimpleLayout>
  );
};

export default SignupPage;
