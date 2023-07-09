import { Box, BoxProps, Link, Stack, styled } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

interface FooterContainerProps extends BoxProps {
  width: string;
}

const FooterContainer = styled(Box)(({ width }: FooterContainerProps) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "row",
  padding: "1rem",
  height: "2.5rem",
  position: "fixed",
  bottom: 0,
  left: 0,
}));

interface FooterProps {
  width: string;
}

const Footer = ({ width }: FooterProps) => {
  return (
    <FooterContainer width={width}>
      <Stack direction={"row"} spacing={1}>
        <GitHubIcon height={"16px"} />

        <Link href="https://github.com/meritabrilhante/nickel-app" underline="none" color="inherit">
          github
        </Link>
      </Stack>
    </FooterContainer>
  );
};

export default Footer;
