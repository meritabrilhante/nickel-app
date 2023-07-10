import { Box, Link, Stack, styled, useMediaQuery, useTheme } from "@mui/material";
import { TextIcon } from "../atoms/text-icon";
import { UserMenu } from "../atoms/user-menu";

const HeaderContainer = styled(Box)(() => ({
  display: "flex",
  width: "inherit",
  flexDirection: "column",
  backgroundColor: "var(--color-tertiary)",
  justifyContent: "center",
  alignItems: "center",
}));

const HeaderAlert = styled(Box)(() => ({
  display: "flex",
  width: "inherit",
  backgroundColor: "var(--color-primary-pure)",
  alignItems: "center",
  "& p": {
    margin: "auto",
  },
}));

const HeaderActionsContainer = styled(Box)(() => ({
  display: "flex",
  maxWidth: "1140px",
  padding: ".875rem 0",
  backgroundColor: "var(--color-tertiary)",
  alignItems: "center",
  justifyContent: "center",
  "&& .MuiLink-root": {
    height: "2.5rem",
    display: "flex",
    padding: "1rem",
    color: "var(--color-light)",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "var(--color-secondary)",
      borderRadius: ".875rem",
    },
  },
}));

const UserContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexDirection: "row",
  [theme.breakpoints.down("md")]: {
    width: "95%",
    padding: "1rem",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  [theme.breakpoints.up("md")]: {
    width: "60%",
    padding: "1rem",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
}));

export const Header = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <HeaderContainer>
      <HeaderAlert>
        <p>✨ versão beta 1.0</p>
      </HeaderAlert>

      <UserContainer>
        <h2>Nickel App</h2>

        <UserMenu />
      </UserContainer>

      {isSmallScreen ? (
        <></>
      ) : (
        <HeaderActionsContainer>
          <Stack direction={"row"} spacing={4}>
            <Link underline={"none"} href={"/explore"}>
              <TextIcon iconName={"FiNavigation"} text={"Explorar"} iconPosition={"left"} />
            </Link>

            <Link underline={"none"} href={"/my_rooms"}>
              <TextIcon iconName={"FiCoffee"} text={"Salas"} iconPosition={"left"} />
            </Link>

            <Link underline={"none"} href={"/my_interactions"}>
              <TextIcon iconName={"FiInbox"} text={"Interações"} iconPosition={"left"} />
            </Link>

            <Link underline={"none"}>
              <TextIcon iconName={"FiSearch"} text={"Pesquisar"} iconPosition={"left"} />
            </Link>
          </Stack>
        </HeaderActionsContainer>
      )}
    </HeaderContainer>
  );
};

export default Header;
