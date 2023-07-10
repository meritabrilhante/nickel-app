import { Button } from "@/app/presentation/components/layout/atoms/button";
import { ContentCard } from "@/app/presentation/components/layout/atoms/content-card";
import { TextIcon } from "@/app/presentation/components/layout/atoms/text-icon";
import MainLayout from "@/app/presentation/components/layout/main-layout/MainLayout.component";
import { Box, Stack, colors, styled } from "@mui/material";
import { SwitchMenu } from "@/app/presentation/components/layout/atoms/switching-menu";
import { useState } from "react";

const HomeContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justiyContent: "space-between",
}));

export const MyRoomsPage = () => {
  const [buttonColor, setButtonColor] = useState(true);

  const setButtonTrue = () => {
    setButtonColor(true);
  };

  const setButtonFalse = () => {
    setButtonColor(false);
  };

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
        <Stack
          direction={"row"}
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            marginBottom: "16px",
          }}
        >
          <h1 style={{ width: "50%" }}>Minhas salas</h1>
          <Button buttonClass={"tertiary"} mainColor={""}>
            <TextIcon iconName={"FiBarChart"} text={"Mais recente"} iconPosition={"right"} />
          </Button>
        </Stack>

        <Stack direction={"row"} width={"100%"}>
          <SwitchMenu onClick={setButtonTrue} buttonClass={firstButtonClass} width="100%">
            {" "}
            Participando
          </SwitchMenu>
          <SwitchMenu onClick={setButtonFalse} buttonClass={secondButtonClass} width="100%">
            {" "}
            Criadas
          </SwitchMenu>
        </Stack>

        <ContentCard type={"room"} />
        <ContentCard type={"room"} />
        <ContentCard type={"room"} />
      </HomeContainer>
    </MainLayout>
  );
};

export default MyRoomsPage;
