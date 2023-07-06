import { Box, BoxProps, styled } from "@mui/material";
import Head from "next/head";
import Footer from "../footer/Footer.component";

interface SimpleLayoutContainerProps extends BoxProps {
  width: string;
}

const SimpleLayoutContainer = styled(Box)(({ width }: SimpleLayoutContainerProps) => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  height: "100vh",
  justifyContent: "space-between",
}));

interface SimpleLayoutProps {
  children: React.ReactNode;
  width: string;
}

const SimpleLayout = ({ children, width }: SimpleLayoutProps) => {
  return (
    <SimpleLayoutContainer width={width}>
      <Head>
        <title>Nickel App | Home</title>
      </Head>

      {children}

      <Footer width={"100%"} />
    </SimpleLayoutContainer>
  );
};

export default SimpleLayout;
