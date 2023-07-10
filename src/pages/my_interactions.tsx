import { Button } from "@/app/presentation/components/layout/atoms/button";
import { Interaction } from "@/app/presentation/components/layout/atoms/interaction-card";
import { TextIcon } from "@/app/presentation/components/layout/atoms/text-icon";
import MainLayout from "@/app/presentation/components/layout/main-layout/MainLayout.component";
import { Home } from "@mui/icons-material";
import { Box, Stack, colors, styled, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { Breadcrumbs } from "@/app/presentation/components/layout/atoms/breadcrumbs";

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
  const breadcrumbsPath = [{ label: "Interações", link: "/my_interactions" }];

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

  const TitleContainer = styled(Box)(() => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  }));

  return (
    <MainLayout width={"100%"} pageTitle={"Home"} mainButton={false}>
      <HomeContainer>
        <Stack spacing={1} style={{ marginTop: "20px", marginBottom: "20px" }}>
          <Breadcrumbs path={breadcrumbsPath} />
          <TitleContainer>
            <h1>Minhas interações</h1>
          </TitleContainer>
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
          titulo="Curiosidades sobre Dom Casmurro"
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
          titulo="Novos quadrinhos do superman são incríveis!"
          date={"08/02/23"}
          badgeColor="#8257E6"
          texto="Reação"
          id="#778853"
          react={false}
          contentText={"Prefiro muito mais as coisas mais antigas, esses novos são um saco!"}
        />
      </HomeContainer>
    </MainLayout>
  );
};

export default MyInteractions;
