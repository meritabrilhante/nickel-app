import { Button } from "@/app/presentation/components/layout/atoms/button";
import { Interaction } from "@/app/presentation/components/layout/atoms/interaction-card";
import { TextIcon } from "@/app/presentation/components/layout/atoms/text-icon";
import MainLayout from "@/app/presentation/components/layout/main-layout/MainLayout.component";
import { Home } from "@mui/icons-material";
import { Box, Stack, colors, styled, Menu, MenuItem } from "@mui/material";
import { useState } from "react";

const HomeContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justiyContent: "space-between",
}));

export const MyInteractions = () => {
  const [buttonColor, setButtonColor] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedOption, setSelectedOption] = useState("Ativas");

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
          <h1>Minhas Interações</h1>
          <Button buttonClass={"tertiary"} mainColor={""}>
            <TextIcon iconName={"FiBarChart"} text={"Mais recente"} iconPosition={"right"} />
          </Button>
        </Stack>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <MenuItem onClick={() => handleOptionSelect("Ativas")}>Ativas</MenuItem>
          <MenuItem onClick={() => handleOptionSelect("Inativas")}>Inativas</MenuItem>
        </Menu>
        <Interaction
          titulo="Eu, eu mesmo e Irene"
          date={"01/05/23"}
          badgeColor="#E1E1E6"
          texto="Discussão"
          id="#151639"
          contentText="Esse filme é incrível! Mas pera ai, essa plataforma não é só para livros!?"
        />
        <Interaction
          titulo=""
          date={"08/02/23"}
          badgeColor="#8257E6"
          texto="Reação"
          id="#421639"
          react={true}
          contentText={"Nossa, amei muito esse conteúdo! Meus parabéns"}
        />
        <Interaction
          titulo="Capitu traiu ou não traiu Bentinho?"
          date={"08/02/23"}
          badgeColor="#5FEE98"
          texto="Resposta"
          id="#399412"
          contentText={"Não havia pensado por esse lado ainda, obrigado!"}
        />
        <Interaction
          titulo=""
          date={"08/02/23"}
          badgeColor="#8257E6"
          texto="Reação"
          id="#778853"
          react={false}
          contentText={"Prefiro muito mais as coisas mais antigas, essas novas são um saco!"}
        />
      </HomeContainer>
    </MainLayout>
  );
};

export default MyInteractions;
