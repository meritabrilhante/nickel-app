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
  backgroundColor: "transparent",
  borderBottom: "5px solid #9747FF",
  "&:hover": {
    backgroundColor: "transparent",
  },
}));

const SecondaryButton = styled(Button)(() => ({
  fontSize: "1rem",
  fontWeight: "var(--font-weight-semibold)",
  backgroundColor: "transparent",
  "&:hover": {
    backgroundColor: "transparent",
    color: "var(--color-primary-pure)",
  },
}));

const TertiaryButton = styled(Button)(() => ({
  fontSize: "1rem",
  fontWeight: "var(--font-weight-semibold)",
  backgroundColor: "transparent",
  border: "3px solid #9747FF",
  "&:hover": {
    backgroundColor: "transparent",
    color: "var(--color-primary-pure)",
  },
}));

const QuarternaryButton = styled(Button)(() => ({
  fontSize: "1rem",
  fontWeight: "var(--font-weight-semibold)",
  backgroundColor: "transparent",
  "&:hover": {
    backgroundColor: "transparent",
    color: "var(--color-primary-pure)",
  },
}));

const btnComponents = {
  primary: PrimaryButton,
  secondary: SecondaryButton,
  tertiary: TertiaryButton,
  quarternary: QuarternaryButton,
};

const IndexMenu = ({ children, buttonClass, onClick, size, width }: ButtonComponentProps) => {
  const BtnComponent = btnComponents[buttonClass];

  return (
    <BtnComponent style={{ width: width }} onClick={onClick} size={size}>
      {children}
    </BtnComponent>
  );
};

export default IndexMenu;
