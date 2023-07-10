import React, { useState, useEffect } from "react";
import { Box, BoxProps, Button, Stack, styled, useMediaQuery, useTheme } from "@mui/material";
import Header from "@/app/presentation/components/layout/header/Header.component";
import Head from "next/head";
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

const ChildrenContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  height: "100vh",
  maxWidth: "40%",
  [theme.breakpoints.down("sm")]: {
    maxWidth: "90%",
  },
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

  const handleClick = () => {
    router.push(mainButtonAction);
  };

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <MainLayoutContainer width={width} pageTitle={pageTitle}>
      <Head>
        <title>Nickel App | {pageTitle}</title>
      </Head>

      <Header />

      <ChildrenContainer>{children}</ChildrenContainer>

      {mainButton ? (
        <Button
          onClick={handleClick}
          size={"large"}
          style={{
            zIndex: "999",
            position: "fixed",
            right: "calc(100vw - 95%)",
            bottom: "calc(100vh - 85%)",
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

      {isSmallScreen ? <LowBar /> : <> </>}

      <Footer width="100%" position="relative" />
    </MainLayoutContainer>
  );
};

export default MainLayout;
