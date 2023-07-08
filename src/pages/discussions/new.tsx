import { Button } from "@/app/presentation/components/layout/atoms/button";
import { Breadcrumbs } from "@/app/presentation/components/layout/atoms/breadcrumbs";
import MainLayout from "@/app/presentation/components/layout/main-layout/MainLayout.component";
import { NewDiscussionForm } from "@/core/components/discussion/new";
import { Box, Stack, styled } from "@mui/material";

const NewDiscussionContainer = styled(Box)(() => ({
  display: "flex",
  width: "30%",
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
    <MainLayout width={"100%"} pageTitle={"Nova Discussão"}>
      <NewDiscussionContainer>
        <Stack spacing={4}>
          <Breadcrumbs path={breadcrumbsPath} />
          <h1>Nova Discussão</h1>
        </Stack>

        <NewDiscussionForm></NewDiscussionForm>

        <Stack
          direction={"row"}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Button buttonClass={"secondary"} size={"large"}>
            ← Voltar
          </Button>

          <Button buttonClass={"primary"} size={"large"}>
            + Publicar
          </Button>
        </Stack>
      </NewDiscussionContainer>
    </MainLayout>
  );
};

export default NewDiscussion;
