import { Button } from "@/app/presentation/components/layout/atoms/button";
import { Breadcrumbs } from "@/app/presentation/components/layout/atoms/breadcrumbs";
import MainLayout from "@/app/presentation/components/layout/main-layout/MainLayout.component";
import { NewDiscussionForm } from "@/core/components/discussion/new";
import { Box, Stack, styled } from "@mui/material";
import { Modal } from "@/app/presentation/components/layout/atoms/modal";
import { useState } from "react";
import { useRouter } from "next/router";

const NewDiscussionContainer = styled(Box)(() => ({
  display: "flex",
  width: "100%",
  flexDirection: "column",
  gap: "32px",
  height: "100vh",
}));

export const NewDiscussion = () => {
  const breadcrumbsPath = [
    { label: "Home", link: "/home" },
    { label: "Nova Discussão", link: "/" },
  ];

  return (
    <MainLayout width={"100%"} pageTitle={"Nova Discussão"} mainButton={false}>
      <NewDiscussionContainer>
        <Stack spacing={4}>
          <Breadcrumbs path={breadcrumbsPath} />
          <h1>Nova Discussão</h1>
        </Stack>

        <NewDiscussionForm />
      </NewDiscussionContainer>
    </MainLayout>
  );
};

export default NewDiscussion;
