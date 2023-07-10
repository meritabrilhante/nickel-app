import { Box, BoxProps, Link, Stack, styled } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

interface FooterContainerProps extends BoxProps {
  width: string;
  position?: "fixed" | "relative"; // Adicionando a nova prop "position" com os valores possíveis
}

const FooterContainer = styled(Box)(({ width, position }: FooterContainerProps) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "row",
  padding: "1rem",
  height: "2.5rem",
  marginTop: "3.5rem",
  position: position || "fixed", // Usando a propriedade "position" ou definindo o valor padrão como "fixed"
  bottom: 0,
  left: 0,
  zIndex: -999,
}));

interface FooterProps {
  width: string;
  position?: "fixed" | "relative"; // Adicionando a nova prop "position" ao componente Footer
}

const Footer = ({ width, position }: FooterProps) => {
  return (
    <></>
    /*<FooterContainer width={width} position={position}>
      <Stack direction={"row"} spacing={1}>
        <GitHubIcon height={"16px"} />

        <Link href="https://github.com/meritabrilhante/nickel-app" underline="none" color="inherit">
          github
        </Link>
      </Stack>
    </FooterContainer>*/
  );
};

export default Footer;
