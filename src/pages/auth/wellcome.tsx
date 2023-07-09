import { useRouter } from "next/router";
import { Box, Stack, styled } from "@mui/material";
import { Button } from "@/app/presentation/components/layout/atoms/button";
import SimpleLayout from "@/app/presentation/components/layout/simpleLayout/SimpleLayout.component";
import React, { useState } from "react";

const WellcomeContainer = styled(Box)(() => ({
  width: "30%",
  display: "flex",
  flexDirection: "column",
  margin: "auto 0",
  minWidth: "300px",
}));

const WellcomePage = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/auth/login");
  };

  return (
    <SimpleLayout width={"100%"}>
      <WellcomeContainer>
        <Stack spacing={3}>
          <h1>Bem-vindo!</h1>
          <p>
            É um prazer imenso receber mais um amante dos livros. O Nickel app foi desenvolvido e é
            mantido pela comunidade acadêmica do IFB e se encontra na versão beta e está em
            constante desenvolvimento.
          </p>
          <p>
            Caso encontre algo alguma inconstintência e quiser contribuir, envie seu feedback para:{" "}
            <strong>nickelappifb@gmail.com</strong>
          </p>
          <Button buttonClass={"primary"} size="large" onClick={handleClick}>
            Entendi
          </Button>
        </Stack>
      </WellcomeContainer>
    </SimpleLayout>
  );
};

export default WellcomePage;
