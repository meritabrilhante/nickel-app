import React from "react";
import { Box, Button, Link, styled, Stack } from "@mui/material";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import { useRouter } from "next/router";

const FullFooterContainer = styled(Box)(() => ({
  width: "100%",
  position: "fixed",
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  borderTop: "2px solid grey",
}));

const SubFooterContainer = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "row",
  backgroundColor: "var(--color-tertiary)",
  padding: "0.8rem",
  width: "100%",
  paddingLeft: "10px",
  paddingRight: "10px",
}));

const styles = {
  button: {
    fontFamily: "var(--font-family-base)",
    backgroundColor: "transparent",
  },
};

const LowBarComponent = () => {
  const router = useRouter();
  const handleExplore = () => {
    router.push("/explore");
  };

  const handleMyRooms = () => {
    router.push("/my_rooms");
  };

  const handleMyInteractions = () => {
    router.push("/my_interactions");
  };

  const handleProfile = () => {
    router.push("/profile");
  };

  const handleMyProfile = () => {
    router.push("/users/userId");
  };

  return (
    <FullFooterContainer>
      <SubFooterContainer>
        <Stack spacing={3} direction="row">
          <Button style={styles.button} onClick={handleExplore} size="small">
            <SpaceDashboardIcon />
            Explorar
          </Button>

          <Button style={styles.button} onClick={handleMyRooms} size="small">
            <MeetingRoomIcon />
            Minhas Salas
          </Button>

          <Button style={styles.button} onClick={handleMyInteractions} size="small">
            <LocalCafeIcon />
            Interações
          </Button>

          <Button style={styles.button} onClick={handleMyProfile} size="small">
            <LocalCafeIcon />
            Perfil
          </Button>
        </Stack>
      </SubFooterContainer>
    </FullFooterContainer>
  );
};

export default LowBarComponent;
