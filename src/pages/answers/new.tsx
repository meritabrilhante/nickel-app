import { Breadcrumbs } from "@/app/presentation/components/layout/atoms/breadcrumbs";
import { TitleHeader } from "@/app/presentation/components/layout/atoms/title-header";
import MainLayout from "@/app/presentation/components/layout/main-layout/MainLayout.component";
import NewAnswerForm from "@/core/components/answer/NewAnswerForm.component";
import { Box, Stack, styled } from "@mui/material";

const AnswerContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  height: "100vh",
  gap: "40px",
  padding: "32px 0",
}));

const TitleContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
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
        <Stack spacing={2}>
          <Breadcrumbs path={breadcrumbsPath} />
          <TitleContainer>
            <h1>Resposta</h1>

            <p>#123456</p>
          </TitleContainer>
        </Stack>

        <Stack spacing={2}>
          <h2 style={{ lineHeight: "140%" }}>
            Qual é o principal mistério presente no enredo de Dom Casmurro?
          </h2>

          <NewAnswerForm />
        </Stack>
      </AnswerContainer>
    </MainLayout>
  );
};

export default Answer;
