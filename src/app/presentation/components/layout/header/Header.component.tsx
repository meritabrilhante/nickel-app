import { Box, Link, Stack, styled, useMediaQuery, useTheme } from "@mui/material";
import { TextIcon } from "../atoms/text-icon";

const HeaderContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "inherit",
  flexDirection: "column",
  backgroundColor: "var(--color-tertiary)",
  justifyContent: "center",
  alignItems: "center",
  "& h2": {
    padding: ".875rem 0",
    display: "flex",
    margin: "auto",
    alignSelf: "flex-start",
  },
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
  width: "inherit",
  padding: ".875rem 0",
  backgroundColor: "var(--color-tertiary)",
  alignItems: "center",
  justifyContent: "center",
  gap: "1rem",
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

const MobileActionsContainer = styled(Box)(() => ({
  position: "fixed",
  backgroundColor: "var(--color-tertiary",
}));

export const Header = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <HeaderContainer>
      <HeaderAlert>
        <p>✨ versão beta 1.0</p>
      </HeaderAlert>

      <h2>Nickel App</h2>

      {isSmallScreen ? (
        <></>
      ) : (
        <HeaderActionsContainer>
          <Stack direction={"row"}>
            <Link underline={"none"}>
              <TextIcon iconName={"FiNavigation"} text={"Explorar"} iconPosition={"left"} />
            </Link>

            <Link underline={"none"}>
              <TextIcon iconName={"FiCoffee"} text={"Salas"} iconPosition={"left"} />
            </Link>

            <Link underline={"none"}>
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
