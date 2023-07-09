import React, { useState, useEffect } from "react";
import { Box, BoxProps, Button, Stack, styled } from "@mui/material";
import Header from "@/app/presentation/components/layout/header/Header.component";
import Head from "next/head";
import { TextIcon } from "../atoms/text-icon";
import { useRouter } from "next/router";
import { LowBar } from "@/app/presentation/components/layout/atoms/low-bar";
import { Footer } from "../footer";

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

interface MainLayoutProps {
  children: React.ReactNode;
  width: string;
  pageTitle: string;
  mainButton: boolean;
  mainButtonLabel?: React.ReactNode;
  mainButtonAction?: string;
}

/**
 * Component that displays the layout for the modal Header
 * @function
 * @name Header
 * @param {HeaderProps} props
 */

const MainLayout = ({
  children,
  width,
  pageTitle,
  mainButton,
  mainButtonAction = "/",
  mainButtonLabel,
}: MainLayoutProps) => {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);

  const handleClick = () => {
    router.push(mainButtonAction);
  };

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

  return (
    <MainLayoutContainer width={width} pageTitle={pageTitle}>
      <Head>
        <title>Nickel App | {pageTitle}</title>
      </Head>

      <Header width={width} />
      {children}

      {mainButton ? (
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
          {mainButtonLabel}
        </Button>
      ) : (
        <></>
      )}

      <Footer width={"100%"} />
    </MainLayoutContainer>
  );
};

export default MainLayout;
