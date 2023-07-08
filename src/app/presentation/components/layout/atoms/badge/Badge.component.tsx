import React from "react";
import { Box, styled } from "@mui/material";
import { hexToRgb } from "@/app/presentation/utils/hex-rgb";

const Badge = styled(Box)(({ mainColor, borderRadius, height, width }: BadgeProps) => ({
  display: "flex",
  alignItems: "center",
  color: `${mainColor}`,
  background: hexToRgb(mainColor, "0.08"),
  borderRadius: borderRadius,
  border: `2px solid ${mainColor}`,
  paddingLeft: "1rem",
  gap: "8px",
  paddingRight: "1rem",
  height: height,
  width: width,
}));

interface BadgeProps {
  children?: React.ReactNode;
  mainColor: string;
  borderRadius: string;
  height: string;
  width?: string;
}

const BadgeComponent = ({ children, mainColor, borderRadius, height, width }: BadgeProps) => {
  return (
    <Badge mainColor={mainColor} borderRadius={borderRadius} height={height} width={width}>
      {children}
    </Badge>
  );
};

export default BadgeComponent;
