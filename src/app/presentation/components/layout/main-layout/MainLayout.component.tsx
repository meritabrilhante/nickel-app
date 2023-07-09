import { Box, BoxProps, Button, Stack, styled } from "@mui/material";
import Footer from "@/app/presentation/components/layout/footer/Footer.component";
import Header from "@/app/presentation/components/layout/header/Header.component";
import Head from "next/head";
import { TextIcon } from "../atoms/text-icon";
import { useRouter } from "next/router";

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
  const router = useRouter();

  const handleClick = () => {
    router.push("/discussions/new");
  };

  return (
    <MainLayoutContainer width={width} pageTitle={pageTitle}>
      <Head>
        <title>Nickel App | {pageTitle}</title>
      </Head>

      <Header width={width} />
      {children}
      <Button
        onClick={handleClick}
        style={{
          zIndex: "999",
          position: "fixed",
          right: "calc(100vw - 95%)",
          bottom: "calc(100vh - 95%)",
          height: "56px",
          background: "var(--color-primary-pure)",
          width: "fit-content",
          padding: "0 24px",
          fontSize: "18px",
          fontWeight: "600",
          borderRadius: "8px 8px 0 8px",
        }}
      >
        <TextIcon iconName={"FiPlus"} text={"Nova Discussão"} iconPosition={"left"} />
      </Button>

      <Footer width={"100%"} />
    </MainLayoutContainer>
  );
};

export default MainLayout;
