import { Button, ButtonProps, styled } from "@mui/material";
import React from "react";

export type ButtonSize = "small" | "medium" | "large";

export type ButtonClass = "primary" | "secondary" | "tertiary";

interface ButtonComponentProps extends ButtonProps {
  text?: string;
  size?: ButtonSize;
  children?: React.ReactNode;
  buttonClass: ButtonClass;
  width?: string;
}

const PrimaryButton = styled(Button)(() => ({
  fontSize: "1rem",
  fontWeight: "var(--font-weight-semibold)",
}));

const SecondaryButton = styled(Button)(() => ({
  color: "var(--color-light)",
  textSize: "1rem",
  fontWeight: "var(--font-weight-semibold)",
  letterSpacing: "0.2px",
  backgroundColor: "transparent",
  "&:hover": {
    backgroundColor: "var(--color-secondary)",
  },
}));

const TertiaryButton = styled(Button)(() => ({
  color: "var(--color-light)",
  border: "1px solid var(--color-tertiary)",
  fontSize: "1rem",
  letterSpacing: "0.1px",
  fontFamily: "var(--font-family-base)",
  backgroundColor: "transparent",
  "&:hover": {
    backgroundColor: "var(--color-tertiary)",
  },
}));

const btnComponents = {
  primary: PrimaryButton,
  secondary: SecondaryButton,
  tertiary: TertiaryButton,
};

const ButtonComponent = ({ children, buttonClass, onClick }: ButtonComponentProps) => {
  const BtnComponent = btnComponents[buttonClass];

  return <BtnComponent onClick={onClick}>{children}</BtnComponent>;
};

export default ButtonComponent;
