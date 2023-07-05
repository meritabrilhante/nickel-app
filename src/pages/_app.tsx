import React from "react";
import { QueryClient, QueryClientProvider } from "@blitzjs/rpc";
import { withBlitz } from "@/blitz-client";
import { ThemeProvider } from "@mui/material";
import { AppProps } from "next/app";
import muiLightTheme from "@/styles/mui/light-theme";
import "@/styles/global.scss";
import "@/styles/fonts.scss";

const queryClient = new QueryClient();

function NickelApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={muiLightTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default NickelApp;
