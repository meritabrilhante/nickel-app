import { Box, BoxProps, styled } from "@mui/material";
import Footer from "@/app/presentation/components/layout/footer/Footer.component";
import Header from "@/app/presentation/components/layout/header/Header.component";
import Head from "next/head";

/**
 * Interface that defines the properties for the HeaderContainer component
 * @interface
 * @extends BoxProps
 * @prop {string} height
 */

interface MainLayoutContainerProps extends BoxProps {
  width: string;
  pageTitle: string;
}

const MainLayoutContainer = styled(Box)(({ width }: MainLayoutContainerProps) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexDirection: "column",
  height: "100vh",
}));

/**
 * Interface that defines the properties for the Header component
 * @interface
 * @prop {React.ReactNode} children
 * @prop {string} height
 */

interface MainLayoutProps {
  children: React.ReactNode;
  width: string;
  pageTitle: string;
}

/**
 * Component that displays the layout for the modal Header
 * @function
 * @name Header
 * @param {HeaderProps} props
 */

const MainLayout = ({ children, width, pageTitle }: MainLayoutProps) => {
  return (
    <MainLayoutContainer width={width} pageTitle={pageTitle}>
      <Head>
        <title>Nickel App | {pageTitle}</title>
      </Head>

      <Header width={width} />
      {children}

      <Footer width={"100%"} />
    </MainLayoutContainer>
  );
};

export default MainLayout;
