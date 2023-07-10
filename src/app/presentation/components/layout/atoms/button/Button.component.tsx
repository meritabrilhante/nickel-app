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
  width?: string;
}

const PrimaryButton = styled(Button)(({ width }: ButtonComponentProps) => ({
  fontSize: "1rem",
  fontWeight: "var(--font-weight-semibold)",
  backgroundColor: "var(--color-primary-pure)",
  width: width,
}));

const SecondaryButton = styled(Button)(({ width }: ButtonComponentProps) => ({
  color: "var(--color-light)",
  textSize: "1rem",
  fontWeight: "var(--font-weight-semibold)",
  letterSpacing: "0.2px",
  backgroundColor: "transparent",
  width: width,
  "&:hover": {
    backgroundColor: "var(--color-secondary)",
  },
}));

const TertiaryButton = styled(Button)(({ width }: ButtonComponentProps) => ({
  color: "var(--color-light)",
  border: "1px solid var(--color-tertiary)",
  fontSize: "1rem",
  letterSpacing: "0.1px",
  fontFamily: "var(--font-family-base)",
  backgroundColor: "transparent",
  "&:hover": {
    backgroundColor: "transparent",
    color: "var(--color-primary-pure)",
  },
  width: width,
}));

export const QuartenaryButton = styled(Button)(() => ({
  borderRadius: "8px",
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

const ButtonComponent = ({ children, buttonClass, onClick, size, width }: ButtonComponentProps) => {
  const BtnComponent = btnComponents[buttonClass];

  return (
    <BtnComponent onClick={onClick} size={size} buttonClass={buttonClass} width={width}>
      {children}
    </BtnComponent>
  );
};

export default ButtonComponent;
