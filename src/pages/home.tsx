import { Button } from "@/app/presentation/components/layout/atoms/button";
import { ContentCard } from "@/app/presentation/components/layout/atoms/content-card";
import { TextIcon } from "@/app/presentation/components/layout/atoms/text-icon";
import MainLayout from "@/app/presentation/components/layout/main-layout/MainLayout.component";
import { Box, Stack, styled } from "@mui/material";

const HomeContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justiyContent: "space-between",
}));

export const HomePage = () => {
  return (
    <MainLayout width={"100%"} pageTitle={"Home"} mainButton={false}>
      <HomeContainer>
        <Stack
          direction={"row"}
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            marginBottom: "16px",
          }}
        >
          <h1>Página Inicial</h1>

          <Button buttonClass={"tertiary"} mainColor={"none"}>
            <TextIcon iconName={"FiFilter"} text={"Mais recente"} iconPosition={"left"} />
          </Button>
        </Stack>

        <ContentCard type={"room"} />
        <ContentCard type={"room"} />
        <ContentCard type={"room"} />
      </HomeContainer>
    </MainLayout>
  );
};

export default HomePage;
