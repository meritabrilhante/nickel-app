import { useState } from "react";
import { Stack, Typography, IconButton, Menu, MenuItem } from "@mui/material";
import { ContentCard } from "@/app/presentation/components/layout/atoms/content-card";
import { TextIcon } from "@/app/presentation/components/layout/atoms/text-icon";
import MainLayout from "@/app/presentation/components/layout/main-layout/MainLayout.component";
import { Box, styled } from "@mui/material";
import { Button } from "@/app/presentation/components/layout/atoms/button";

const HomeContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "space-between",
}));

const ExplorePage = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedOption, setSelectedOption] = useState("Discussões");

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
    <MainLayout width="100%" pageTitle="Home">
      <HomeContainer>
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
              cursor: "pointer",
            }}
            alignItems="center"
            onClick={handleMenuOpen}
          >
            <h1>{selectedOption}</h1>
            <TextIcon iconName="FiChevronDown" iconPosition="right" text="" />
          </Stack>
          <Button buttonClass={"tertiary"}>
            <TextIcon iconName={"FiTrello"} text={"Alfabética"} iconPosition={"right"} />
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
          <MenuItem onClick={() => handleOptionSelect("Salas")}>Salas</MenuItem>
          <MenuItem onClick={() => handleOptionSelect("Discussões")}>Discussões</MenuItem>
        </Menu>

        <ContentCard type={selectedOption === "Discussões" ? "discussion" : "rooms"} />
        <ContentCard type={selectedOption === "Discussões" ? "discussion" : "rooms"} />
        <ContentCard type={selectedOption === "Discussões" ? "discussion" : "rooms"} />
      </HomeContainer>
    </MainLayout>
  );
};

export default ExplorePage;
