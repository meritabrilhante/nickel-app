import { Breadcrumbs } from "@/app/presentation/components/layout/atoms/breadcrumbs";
import DeleteButton from "@/app/presentation/components/layout/atoms/delete-button/DeleteButton.component";
import { TitleHeader } from "@/app/presentation/components/layout/atoms/title-header";
import MainLayout from "@/app/presentation/components/layout/main-layout/MainLayout.component";
import NewAnswerForm from "@/core/components/answer/NewAnswerForm.component";
import { Box, Stack, styled } from "@mui/material";

const AnswerContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  height: "100vh",
  gap: "5%",
  width: "30%",
}));

const Answer = () => {
  const breadcrumbsPath = [
    { label: "Discussões", link: "/discussions" },
    { label: "Discussão", link: "/discussionId" },
    { label: "Responder", link: "/answers/new" },
  ];

  return (
    <MainLayout width={"100%"} pageTitle={"Resposta"} mainButton={false}>
      <AnswerContainer>
        <Stack spacing={4} style={{ display: "flex", width: "100%" }}>
          <Breadcrumbs path={breadcrumbsPath} />
          <TitleHeader title={"Responder"} description={"#0x8B5F2A"} />
        </Stack>

        <Stack spacing={2}>
          <h2>Pergunta?</h2>

          <DeleteButton />

          <NewAnswerForm />
        </Stack>
      </AnswerContainer>
    </MainLayout>
  );
};

export default Answer;
