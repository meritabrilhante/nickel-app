import { hexToRgb } from "@/app/presentation/utils/hex-rgb";
import { Button, ButtonProps, styled } from "@mui/material";
import React from "react";

export type ButtonSize = "small" | "medium" | "large";

export type ButtonClass = "primary" | "secondary" | "tertiary" | "quartenary";

interface ButtonComponentProps extends ButtonProps {
  text?: string;
  size?: ButtonSize;
  children?: React.ReactNode;
  buttonClass: ButtonClass;
  mainColor: string;
}

const PrimaryButton = styled(Button)(({ mainColor }: ButtonComponentProps) => ({
  fontSize: "1rem",
  fontWeight: "var(--font-weight-semibold)",
  mainColor: mainColor,
  backgroundColor: "var(--color-primary-pure)",
}));

const SecondaryButton = styled(Button)(({ mainColor }: ButtonComponentProps) => ({
  color: "var(--color-light)",
  textSize: "1rem",
  fontWeight: "var(--font-weight-semibold)",
  letterSpacing: "0.2px",
  backgroundColor: "transparent",
  mainColor: mainColor,
  "&:hover": {
    backgroundColor: "var(--color-secondary)",
  },
}));

const TertiaryButton = styled(Button)(({ mainColor }: ButtonComponentProps) => ({
  color: "var(--color-light)",
  border: "1px solid var(--color-tertiary)",
  fontSize: "1rem",
  letterSpacing: "0.1px",
  fontFamily: "var(--font-family-base)",
  mainColor: mainColor,
  backgroundColor: "transparent",
  "&:hover": {
    backgroundColor: "transparent",
    color: "var(--color-primary-pure)",
  },
}));

export const QuartenaryButton = styled(Button)(({ mainColor }: ButtonComponentProps) => ({
  color: mainColor,
  backgroundColor: hexToRgb(mainColor, "0.8"),
  borderRadius: "8px",
  border: `2px solid ${mainColor}`,
  fontSize: "1rem",
  letterSpacing: "0.1px",
  fontFamily: "var(--font-family-base)",
  "&:hover": {
    backgroundColor: "transparent",
  },
}));

const btnComponents = {
  primary: PrimaryButton,
  secondary: SecondaryButton,
  tertiary: TertiaryButton,
  quartenary: QuartenaryButton,
};

const ButtonComponent = ({
  children,
  buttonClass,
  onClick,
  size,
  mainColor,
}: ButtonComponentProps) => {
  const BtnComponent = btnComponents[buttonClass];

  console.log(mainColor);

  return (
    <BtnComponent onClick={onClick} size={size} buttonClass={buttonClass} mainColor={mainColor}>
      {children}
    </BtnComponent>
  );
};

export default ButtonComponent;
