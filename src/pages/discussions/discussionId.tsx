import MainLayout from "@/app/presentation/components/layout/main-layout/MainLayout.component";
import { Box, Stack, styled } from "@mui/material";
import { Breadcrumbs } from "@/app/presentation/components/layout/atoms/breadcrumbs";
import { ContentCard } from "@/app/presentation/components/layout/atoms/content-card";
import { Button } from "@/app/presentation/components/layout/atoms/button";
import { TextIcon } from "@/app/presentation/components/layout/atoms/text-icon";
import { TitleHeader } from "@/app/presentation/components/layout/atoms/title-header";
import { Modal } from "@/app/presentation/components/layout/atoms/modal";
import { useState } from "react";
import Answer from "@/app/presentation/components/layout/atoms/answer/Answer.component";

const DiscussionContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  height: "100vh",
}));

export const Discussion = () => {
  const breadcrumbsPath = [
    { label: "Home", link: "/home" },
    { label: "Título da Discussão", link: "/" },
  ];

  return (
    <MainLayout
      width={"100%"}
      pageTitle={"Título da Discussão"}
      mainButton={true}
      mainButtonLabel={<TextIcon iconName={"FiPlus"} text={"Responder"} iconPosition={"left"} />}
      mainButtonAction={"/answers/new"}
    >
      <DiscussionContainer>
        <Stack
          spacing={4}
          style={{ display: "flex", justifyContent: "space-between", width: "100%" }}
        >
          <Breadcrumbs path={breadcrumbsPath} />

          <Stack>
            <TitleHeader title={"Título da Discussão"} description={"0x8B5F2A"} />
          </Stack>
        </Stack>

        <ContentCard type={"discussion"} />

        <Stack
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            paddingBottom: "32px",
          }}
        >
          <h2 style={{ marginRight: "300px" }}>Respostas</h2>

          <Button buttonClass={"tertiary"} mainColor={""}>
            <TextIcon iconName={"FiFilter"} text={"Mais Relevante"} iconPosition={"left"} />
          </Button>
        </Stack>

        <Answer />
      </DiscussionContainer>
    </MainLayout>
  );
};

export default Discussion;
