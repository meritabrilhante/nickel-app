/* eslint-disable max-lines */
import React from "react"
import { createTheme } from "@mui/material/styles"
import { theme as nickelTheme } from "src/app/presentation/styles/theme"

declare module "@mui/material/styles/createTheme" {
  interface Theme {
    status: {
      danger: React.CSSProperties["color"]
    }
  }
  interface ThemeOptions {
    status: {
      danger: React.CSSProperties["color"]
    }
  }
}

declare module "@mui/material/styles/createPalette" {
  interface Palette {
    secondary: Palette["primary"]
  }
}

declare module "@mui/material/styles" {
  interface SimplePaletteColorOptions {
    superLight?: string
  }

  interface PaletteColor {
    superLight?: string
  }
}

declare module "@mui/material/IconButton" {
  interface IconButtonPropsColorOverrides {
    outlinedPrimary: true
    outlinedError: true
    textPrimary: true
    textError: true
  }
}

const muiLightTheme = createTheme({
  typography: {
    h1: {
      fontFamily: nickelTheme.tokens.fontFamily.primary,
      fontWeight: nickelTheme.tokens.fontWeight.semiBold,
      fontSize: nickelTheme.tokens.fontSize.xl,
      lineHeight: nickelTheme.tokens.lineHeight.sm,
      color: nickelTheme.tokens.colors.light,
    },
    h2: {
      fontFamily: nickelTheme.tokens.fontFamily.primary,
      fontSize: nickelTheme.tokens.fontSize.l,
      lineHeight: nickelTheme.tokens.lineHeight.sm,
      color: nickelTheme.tokens.colors.light,
    },
    h3: {
      fontFamily: nickelTheme.tokens.fontFamily.primary,
      fontWeight: nickelTheme.tokens.fontWeight.semiBold,
      fontSize: nickelTheme.tokens.fontSize.m,
      lineHeight: nickelTheme.tokens.lineHeight.sm,
      color: nickelTheme.tokens.colors.light,
    },
    fontFamily: nickelTheme.tokens.fontFamily.primary,
  },

  status: {
    danger: nickelTheme.tokens.colors.systemColors.error.dark,
  },

  palette: {
    mode: "light",
    primary: {
      light: nickelTheme.tokens.colors.primary.light,
      main: nickelTheme.tokens.colors.primary.pure,
      dark: nickelTheme.tokens.colors.primary.dark,
    },
    secondary: {
      main: nickelTheme.tokens.colors.secondary,
      dark: nickelTheme.tokens.colors.tertiary,
    },

    success: {
      light: nickelTheme.tokens.colors.systemColors.success.light,
      main: nickelTheme.tokens.colors.systemColors.success.pure,
      dark: nickelTheme.tokens.colors.systemColors.success.dark,
    },
    error: {
      light: nickelTheme.tokens.colors.systemColors.error.light,
      main: nickelTheme.tokens.colors.systemColors.error.pure,
      dark: nickelTheme.tokens.colors.systemColors.error.dark,
    },
  },

  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        disableRipple: true,
        size: "large",
        variant: "contained",
        color: "primary",
      },
      styleOverrides: {
        root: {
          borderRadius: "0px 8px 8px 8px",
          fontFamily: "var(--font-family-primary)",
          lineHeight: "var(--line-height-sm)",
          fontWeight: "var(--font-weight-m)",
          fontSize: "var(--font-size-xs)",
          textAlign: "center",
          textTransform: "none",
          padding: "0 1rem",
          border: "inherit",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.5rem",
          transition: "background-color 200ms, color 200ms, border-color 200ms",
        },
      },
    },
  },
})

export default muiLightTheme
