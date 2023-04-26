import { nickelColors, NickelColors } from "./colors"

/**
 * Type that defines the basis for the different types of token groups in the design system.
 * @type {{ [key in KeyType]: ValueType }}
 */

export type TokenGroup<KeyType extends string, ValueType> = { [key in KeyType]: ValueType }

/**
 * Type that defines the font family varieties.
 * @type {'primary' | 'base'}
 */

export type NickelTokensFontFamily = "primary" | "base"

/**
 * Type defining the varieties of line height.
 * @type {'sm' | 'md' | 'lg'}
 */

export type NickelTokensLineHeight = "sm" | "md" | "lg"

/**
 * Type that defines the font weight varieties.
 * @type {'regular' | 'medium' | 'semiBold' | 'bold'}
 */

export type NickelTokensFontWeight = "regular" | "medium" | "semiBold" | "bold"

/**
 * Type that defines the font size varieties.
 * @type {'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl'}
 */

export type NickelTokensFontSize = "xs" | "s" | "m" | "l" | "xl" | "xxl"

/**
 * Interface that represents the tokens of the design system.
 * @interface
 * @prop {TokenGroup<NickelTokensFontFamily, string>} fontFamily
 * @prop {TokenGroup<NickelTokensLineHeight, string>} lineHeight
 * @prop {TokenGroup<NickelTokensFontWeight, number>} fontWeight
 * @prop {TokenGroup<NickelTokensFontSize, string>} fontSize
 * @prop {NickelColors} colors
 */

export interface NickelTokens {
  fontFamily: TokenGroup<NickelTokensFontFamily, string>
  lineHeight: TokenGroup<NickelTokensLineHeight, string>
  fontWeight: TokenGroup<NickelTokensFontWeight, number>
  fontSize: TokenGroup<NickelTokensFontSize, string>
  colors: NickelColors
}

/**
 * Interface that represents the type of the application theme
 * @interface
 * @prop {NickelTokens} tokens
 */

export interface NickelTheme {
  tokens: NickelTokens
}

/**
 * Constant that represents the theme of the application
 * @constant
 */

export const theme: NickelTheme = {
  // INFO: everything inside ":root" are tokens from the design system. The tokens must exist and be identical
  // to the file "theme.ts" (inside "tokens") and to the file "global.scss" (inside ":root").

  tokens: {
    fontFamily: {
      primary: "Urbanist, sans-serif",
      base: "Inter, sans-serif",
    },

    lineHeight: {
      sm: "125%",
      md: "150%",
      lg: "175%",
    },

    fontWeight: {
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
    },

    fontSize: {
      xs: "0.85rem",
      s: "1rem",
      m: "1.25rem",
      l: "1.5rem",
      xl: "2rem",
      xxl: "2.5rem",
    },

    colors: nickelColors,
  },
}
