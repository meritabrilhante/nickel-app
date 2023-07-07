import { Button } from "@/app/presentation/components/layout/atoms/button";
import { ContentCard } from "@/app/presentation/components/layout/atoms/content-card";
import { ContentHeader } from "@/app/presentation/components/layout/atoms/content-header";
import { TitleHeader } from "@/app/presentation/components/layout/atoms/title-header";
import MainLayout from "@/app/presentation/components/layout/main-layout/MainLayout.component";
import { Box, styled } from "@mui/material";
import { FaSortAmountUpAlt } from "react-icons/fa";

const HomeContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justiyContent: "space-between",
}));

export const HomePage = () => {
  return (
    <MainLayout width={"100%"} pageTitle={"Home"}>
      <HomeContainer>
        <TitleHeader
          title={"Descrição"}
          button={
            <Button buttonClass={"tertiary"}>
              Mais recente
              <FaSortAmountUpAlt />
            </Button>
          }
        />

        <ContentHeader date={"24/07/2023"} />

        <ContentCard />
      </HomeContainer>
    </MainLayout>
  );
};

export default HomePage;
