import { Box, Link, styled, Stack } from "@mui/material";
import { Icon } from "../icon";

const FullFooterContainer = styled(Box)(() => ({
  width: "100%",
  position: "fixed",
  zIndex: "9999",
  backgroundColor: "var(--color-tertiary)",
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  borderTop: "0.05px solid var(--color-secondary)",
}));

const SubFooterContainer = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexDirection: "row",
  padding: "0.875rem",
  "&& .MuiLink-root": {
    display: "flex",
    height: "2.5rem",
    alignItems: "center",
    flexDirection: "column",
    color: "var(--color-light)",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "var(--color-secondary)",
      borderRadius: ".875rem",
    },
  },
}));

const LowBarComponent = () => {
  return (
    <FullFooterContainer>
      <SubFooterContainer>
        <Stack spacing={3} direction="row">
          <Link underline={"none"} href={"/explore"}>
            <Icon name={"FiNavigation"} />
            <p>Explorar</p>
          </Link>

          <Link underline={"none"} href={"/my_rooms"}>
            <Icon name={"FiCoffee"} />
            <p>Salas</p>
          </Link>

          <Link underline={"none"} href={"/my_interactions"}>
            <Icon name={"FiInbox"} />
            <p>Interações</p>
          </Link>

          <Link underline={"none"}>
            <Icon name={"FiSearch"} />
            <p>Pesquisar</p>
          </Link>
        </Stack>
      </SubFooterContainer>
    </FullFooterContainer>
  );
};

export default LowBarComponent;
