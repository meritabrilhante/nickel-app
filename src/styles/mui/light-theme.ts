/* eslint-disable max-lines */
import React from "react";
import { createTheme } from "@mui/material/styles";
import { theme as nickelTheme } from "src/app/presentation/styles/theme";

declare module "@mui/material/styles/createTheme" {
  interface Theme {
    status: {
      danger: React.CSSProperties["color"];
    };
  }
  interface ThemeOptions {
    status: {
      danger: React.CSSProperties["color"];
    };
  }
}

declare module "@mui/material/styles/createPalette" {
  interface Palette {
    secondary: Palette["primary"];
  }
}

declare module "@mui/material/styles" {
  interface SimplePaletteColorOptions {
    superLight?: string;
  }

  interface PaletteColor {
    superLight?: string;
  }
}

declare module "@mui/material/IconButton" {
  interface IconButtonPropsColorOverrides {
    outlinedPrimary: true;
    outlinedError: true;
    textPrimary: true;
    textError: true;
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
    info: {
      main: nickelTheme.tokens.colors.systemColors.info.pure,
    },
  },

  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        disableRipple: true,
        variant: "contained",
      },
      styleOverrides: {
        root: {
          fontFamily: "var(--font-family-primary)",
          lineHeight: "var(--line-height-sm)",
          letterSpacing: "0.5px",
          fontSize: "var(--font-size-xs)",
          textAlign: "center",
          textTransform: "none",
          border: "inherit",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.5rem",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          backgroundColor: "var(--color-secondary)",
          fontFamily: "var(--font-family-base)",
          height: "2.8rem",
          color: "var(--color-light)",
          padding: "1rem",
          "&.Mui-focused": {
            border: "1px solid var(--color-light)",
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontWeight: "semibold",
          margin: "0px",
          color: "var(--color-light)",
          fontFamily: "var(--font-family-base)",
          fontSize: "14px",
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          height: "1rem",
          color: "var(--color-light)",
          padding: "0px",
          "&.Mui-hover": {
            backgroundColor: "none",
          },
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          fontFamily: "var(--font-family-base)",
          fontWeight: "var(--font-weight-semibold)",
          height: "2.4rem",
          fontSize: "1rem",
          backgroundColor: "var(--color-secondary)",
        },
      },
    },
  },
});

export default muiLightTheme;
