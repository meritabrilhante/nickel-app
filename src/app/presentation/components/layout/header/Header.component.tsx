import { Box, BoxProps, Button, Link, styled, Stack } from "@mui/material";
import SearchComponent from "@/core/components/search/Search.component";
import { UserMenu } from "../atoms/user-menu";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { IconButton, InputAdornment, InputBase } from "@mui/material";
import { Search } from "@mui/icons-material";

interface HeaderContainerProps extends BoxProps {
  width: string;
}

const FullHeaderContainer = styled(Box)(({ width }: HeaderContainerProps) => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  marginBottom: "40px",
}));

const UpHeaderContainer = styled(Box)(({ width }: UpHeaderContainerProps) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "1rem",
  height: "2rem",
  width: "100%",
  fontWeight: "var(--font-weight-medium)",
  backgroundColor: "var(--color-primary-pure)",
}));

const SubHeaderContainer = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "row",
  backgroundColor: "var(--color-tertiary)",
  padding: "0.8rem",
  width: "100%",
}));

const MidHeaderContainer = styled(Box)(({ width }: HeaderContainerProps) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0.8rem 2rem", // Reduzindo o padding para se adaptar a telas menores
  width: "100%", // Utilizando a largura total disponível
  backgroundColor: "var(--color-tertiary)",
}));

interface FullHeaderProps {
  width: string;
}

interface UpHeaderContainerProps {
  width: string;
}

const styles = {
  button: {
    fontFamily: "var(--font-family-base)",
    backgroundColor: "transparent",
  },
};

const Header = ({ width }: FullHeaderProps) => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 700);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
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

  const handleMyProfile = () => {
    router.push("/users/userId");
  };

  return (
    <FullHeaderContainer width={width}>
      <UpHeaderContainer width={"100%"}>
        <p> ✨ versão beta 1.0</p>
      </UpHeaderContainer>

      <MidHeaderContainer width={"100%"}>
        <Link href="/home" underline="none" color="inherit">
          <h2>Nickel App</h2>
        </Link>

        {!isMobile ? <SearchComponent /> : <div> </div>}

        {isMobile ? (
          <Stack gap={2} direction={"row"} alignItems={"center"}>
            <IconButton>
              <Search />
            </IconButton>
            <UserMenu onclick={handleMyProfile} />
          </Stack>
        ) : (
          <UserMenu onclick={handleMyProfile} />
        )}
      </MidHeaderContainer>
      {!isMobile && (
        <SubHeaderContainer>
          <Stack spacing={2} direction={"row"}>
            <Button style={styles.button} onClick={handleExplore}>
              <SpaceDashboardIcon />
              Explorar
            </Button>

            <Button style={styles.button} onClick={handleMyRooms}>
              <MeetingRoomIcon />
              Minhas Salas
            </Button>

            <Button style={styles.button} onClick={handleMyInteractions}>
              <LocalCafeIcon />
              Minhas Interações
            </Button>
          </Stack>
        </SubHeaderContainer>
      )}
    </FullHeaderContainer>
  );
};

export default Header;
