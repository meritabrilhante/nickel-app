import MainLayout from "@/app/presentation/components/layout/main-layout/MainLayout.component";
import { Box, Stack, styled } from "@mui/material";
import { Breadcrumbs } from "@/app/presentation/components/layout/atoms/breadcrumbs";
import { ContentCard } from "@/app/presentation/components/layout/atoms/content-card";
import { Button } from "@/app/presentation/components/layout/atoms/button";

const DiscussionContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "32px",
  height: "100vh",
}));

export const Discussion = () => {
  const breadcrumbsPath = [
    { label: "Home", link: "/home" },
    { label: "Título da Discussão", link: "/" },
  ];

  return (
    <DiscussionContainer>
      <MainLayout width={"100%"} pageTitle={"Título da Discussão"}>
        <Stack spacing={4} style={{ width: "28%" }}>
          <Breadcrumbs path={breadcrumbsPath} />

          <Stack
            direction={"row"}
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <h1>Título da Discussão</h1>
            <p>#0x8B5F2A</p>
          </Stack>
        </Stack>

        <ContentCard type={"discussion"} />
      </MainLayout>
    </DiscussionContainer>
  );
};

export default Discussion;
