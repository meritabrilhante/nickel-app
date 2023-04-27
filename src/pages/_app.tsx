import React from "react"
import { withBlitz } from "@/blitz-client"
import { ThemeProvider } from "@mui/material"
import { AppProps } from "next/app"
import muiLightTheme from "@/styles/mui/light-theme"
import "@/styles/global.scss"
import "@/styles/fonts.scss"

function NickelApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={muiLightTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default withBlitz(NickelApp)
