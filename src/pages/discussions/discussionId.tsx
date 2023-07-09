import MainLayout from "@/app/presentation/components/layout/main-layout/MainLayout.component";
import { Box, Stack, styled } from "@mui/material";
import { Breadcrumbs } from "@/app/presentation/components/layout/atoms/breadcrumbs";
import { ContentCard } from "@/app/presentation/components/layout/atoms/content-card";
import { Button } from "@/app/presentation/components/layout/atoms/button";
import { TextIcon } from "@/app/presentation/components/layout/atoms/text-icon";
import { TitleHeader } from "@/app/presentation/components/layout/atoms/title-header";
import { Modal } from "@/app/presentation/components/layout/atoms/modal";
import { useState } from "react";

const DiscussionContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  alignItems: "center",
  gap: "5%",
  height: "100vh",
}));

export const Discussion = () => {
  const breadcrumbsPath = [
    { label: "Home", link: "/home" },
    { label: "Título da Discussão", link: "/" },
  ];

  return (
    <MainLayout width={"100%"} pageTitle={"Título da Discussão"}>
      <DiscussionContainer>
        <Stack spacing={4} style={{ width: "28%" }}>
          <Breadcrumbs path={breadcrumbsPath} />

          <Stack
            direction={"row"}
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <TitleHeader title={"Título da Discussão"} description={"0x8B5F2A"} />
          </Stack>
        </Stack>

        <ContentCard type={"discussion"} />
      </DiscussionContainer>
    </MainLayout>
  );
};

export default Discussion;
