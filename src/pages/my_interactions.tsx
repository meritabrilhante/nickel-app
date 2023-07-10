import { Button } from "@/app/presentation/components/layout/atoms/button";
import { Interaction } from "@/app/presentation/components/layout/atoms/interaction-card";
import { TextIcon } from "@/app/presentation/components/layout/atoms/text-icon";
import MainLayout from "@/app/presentation/components/layout/main-layout/MainLayout.component";
import { Box, Stack, colors, styled, Menu, MenuItem } from "@mui/material";
import { SwitchMenu } from "@/app/presentation/components/layout/atoms/switching-menu";
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
            marginBottom: "16px",
          }}
        >
          <h1>Minhas interações</h1>
        </Stack>
        <Stack
          direction={"row"}
          style={{
            display: "flex",
            gap: "10px",
            width: "100%",
          }}
        >
          <Stack
            direction="row"
            style={{
              display: "flex",
              gap: "10px",
              width: "100%",
              marginBottom: "16px",
              marginTop: "50px",
              cursor: "pointer",
            }}
            alignItems="center"
            onClick={handleMenuOpen}
          >
            <h1>{selectedOption}</h1>
            <TextIcon iconName="FiChevronDown" iconPosition="right" text="" />
          </Stack>
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
          titulo="Título de Discussão"
          date={"01/05/23"}
          badgeColor="#E1E1E6"
          texto="Discussão"
          id="#151639"
        />
        <Interaction
          titulo=""
          date={"08/02/23"}
          badgeColor="#8257E6"
          texto="Reação"
          id="#421639"
          react={true}
        />
        <Interaction
          titulo="Título de Discussão"
          date={"08/02/23"}
          badgeColor="#5FEE98"
          texto="Resposta"
          id="#399412"
        />
        <Interaction
          titulo=""
          date={"08/02/23"}
          badgeColor="#8257E6"
          texto="Reação"
          id="#778853"
          react={false}
        />
      </HomeContainer>
    </MainLayout>
  );
};

export default MyInteractions;
