import { Stack, Typography, IconButton, Menu, MenuItem } from "@mui/material";
import { ContentCard } from "@/app/presentation/components/layout/atoms/content-card";
import { TextIcon } from "@/app/presentation/components/layout/atoms/text-icon";
import MainLayout from "@/app/presentation/components/layout/main-layout/MainLayout.component";
import { Box, styled } from "@mui/material";
import { Button } from "@/app/presentation/components/layout/atoms/button";
import React, { useState, useEffect } from "react";
import { Breadcrumbs } from "@/app/presentation/components/layout/atoms/breadcrumbs";
import DiscussionCard from "@/app/presentation/components/layout/atoms/content-card/DiscussionCard.component";
import RoomCard from "@/app/presentation/components/layout/atoms/content-card/RoomCard.component";
import { Badge } from "@/app/presentation/components/layout/atoms/badge";

const HomeContainer = styled(Box)(() => ({
  display: "flex",
  padding: "32px 0",
  flexDirection: "column",
  height: "100vh",
  gap: "40px",
}));

const TitleContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

const ExplorePage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedOption, setSelectedOption] = useState("Discussões");
  const [buttonColor, setButtonColor] = useState(true);

  const setButtonTrue = () => {
    setButtonColor(true);
  };

  const setButtonFalse = () => {
    setButtonColor(false);
  };

  const firstButtonClass = buttonColor ? "tertiary" : "quarternary";
  const secondButtonClass = buttonColor ? "quarternary" : "tertiary";

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    handleMenuClose();
  };

  const breadcrumbsPath = [{ label: "Explorar", link: "/explore" }];

  return (
    <MainLayout
      mainButton={true}
      width="100%"
      pageTitle="Home"
      mainButtonLabel="+ Nova Discussão"
      mainButtonAction="/discussions/new"
    >
      <HomeContainer>
        <Stack spacing={1}>
          <Breadcrumbs path={breadcrumbsPath} />
          <TitleContainer>
            <h1>Explorar</h1>

            <Button buttonClass={"tertiary"} size={"small"} width={"156px"}>
              <TextIcon iconName={"FiFilter"} text={"Mais Recentes"} iconPosition={"left"} />
            </Button>
          </TitleContainer>
        </Stack>

        <DiscussionCard
          discussionTitle={"Qual é o principal mistério presente no enredo de Dom Casmurro?"}
          discussionId={"#123456"}
          description={"Como ele influencia a narrativa?"}
          badge={
            <Badge mainColor={"#5FEE98"} borderRadius={"9999px"} height={"32px"}>
              <TextIcon iconName={"FiBook"} text={"Literatura Brasileira"} iconPosition={"left"} />
            </Badge>
          }
          author={"Machado de Assis"}
          bookName={"Dom Casmurro"}
        />
        <RoomCard
          visibility={"lock"}
          roomName={"Programação Orientada a Objeto"}
          roomId={"#569823"}
          badge={
            <Badge mainColor={"#3B949A"} borderRadius={"9999px"} height={"32px"}>
              <TextIcon iconName={"FiCpu"} text={"Tecnologia"} iconPosition={"left"} />
            </Badge>
          }
          description={
            "Sala voltando para os alunos matriculados na disciplina de POO do curso Sistemas para Internet"
          }
          institution={"Instituto Federal de Brasília"}
        />
      </HomeContainer>
    </MainLayout>
  );
};

export default ExplorePage;
