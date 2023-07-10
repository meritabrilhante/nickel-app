import { Button } from "@/app/presentation/components/layout/atoms/button";
import { ContentCard } from "@/app/presentation/components/layout/atoms/content-card";
import { TextIcon } from "@/app/presentation/components/layout/atoms/text-icon";
import MainLayout from "@/app/presentation/components/layout/main-layout/MainLayout.component";
import { Box, Stack, colors, styled } from "@mui/material";
import { SwitchMenu } from "@/app/presentation/components/layout/atoms/switching-menu";
import { useState } from "react";
import RoomCard from "@/app/presentation/components/layout/atoms/content-card/RoomCard.component";
import { Badge } from "@/app/presentation/components/layout/atoms/badge";
import { Breadcrumbs } from "@/app/presentation/components/layout/atoms/breadcrumbs";

const HomeContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justiyContent: "space-between",
}));

const TitleContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const MyRoomsPage = () => {
  const [buttonColor, setButtonColor] = useState(true);

  const setButtonTrue = () => {
    setButtonColor(true);
  };

  const setButtonFalse = () => {
    setButtonColor(false);
  };

  const breadcrumbsPath = [{ label: "Salas", link: "/my_rooms" }];
  const firstButtonClass = buttonColor ? "primary" : "secondary";
  const secondButtonClass = buttonColor ? "secondary" : "primary";
  return (
    <MainLayout
      width={"100%"}
      pageTitle={"Minhas Salas"}
      mainButton={true}
      mainButtonLabel={<TextIcon iconName={"FiPlus"} text={"Criar Sala"} iconPosition={"left"} />}
      mainButtonAction={"rooms/new"}
    >
      <HomeContainer>
        <Stack spacing={1} style={{ marginTop: "20px", marginBottom: "20px" }}>
          <Breadcrumbs path={breadcrumbsPath} />
          <TitleContainer>
            <h1>Minhas salas</h1>
          </TitleContainer>
        </Stack>

        <Stack direction={"row"} width={"100%"} style={{ marginBottom: "20px" }}>
          <SwitchMenu onClick={setButtonTrue} buttonClass={firstButtonClass} width="100%">
            {" "}
            Participando
          </SwitchMenu>
          <SwitchMenu onClick={setButtonFalse} buttonClass={secondButtonClass} width="100%">
            {" "}
            Criadas
          </SwitchMenu>
        </Stack>

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

export default MyRoomsPage;
