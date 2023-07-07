import { Box, BoxProps, Button, Link, styled, Stack } from "@mui/material";
import SearchComponent from "@/core/components/search/Search.component";
import { UserMenu } from "../atoms/user-menu";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";

interface HeaderContainerProps extends BoxProps {
  width: string;
}

const FullHeaderContainer = styled(Box)(({ width }: HeaderContainerProps) => ({
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

const MidHeaderContainer = styled(Box)(({ width }: UpHeaderContainerProps) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0.8rem 10rem",
  width: "100%",
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
  return (
    <FullHeaderContainer width={width}>
      <UpHeaderContainer width={"100%"}>
        <p> ✨ versão beta 1.0</p>
      </UpHeaderContainer>

      <MidHeaderContainer width={"100%"}>
        <Link href="" underline="none" color="inherit">
          <h2>Nickel App</h2>
        </Link>

        <SearchComponent />

        <UserMenu />
      </MidHeaderContainer>

      <SubHeaderContainer>
        <Stack spacing={2} direction={"row"}>
          <Button style={styles.button}>
            <SpaceDashboardIcon />
            Explorar
          </Button>

          <Button style={styles.button}>
            <MeetingRoomIcon />
            Minhas Salas
          </Button>

          <Button style={styles.button}>
            <LocalCafeIcon />
            Minhas Interações
          </Button>
        </Stack>
      </SubHeaderContainer>
    </FullHeaderContainer>
  );
};

export default Header;
