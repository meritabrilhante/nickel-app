import React from "react";
import { Box, styled } from "@mui/material";
import { hexToRgb } from "@/app/presentation/utils/hex-rgb";
import { TextIcon } from "../text-icon";

const Badge = styled(Box)(({ mainColor, borderRadius, height, width }: BadgeProps) => ({
  display: "flex",
  alignItems: "center",
  color: `${mainColor}`,
  background: hexToRgb(mainColor, "0.08"),
  borderRadius: borderRadius,
  border: `2px solid ${mainColor}`,
  gap: "8px",
  height: height,
  width: "fit-content",
  padding: "0 8px 0 8px",
  cursor: "pointer",
}));

interface BadgeProps {
  children: React.ReactNode;
  mainColor: string;
  borderRadius: string;
  height: string;
  width?: string;
  onClick?: () => void; // New onClick prop
}

const BadgeComponent = (
  { mainColor, children, borderRadius, height, width, onClick }: BadgeProps,
  { icon, label }
) => {
  return (
    <Badge
      mainColor={mainColor}
      borderRadius={borderRadius}
      height={height}
      width={width}
      onClick={onClick}
      style={{ display: "flex", justifyContent: "center" }}
    >
      {children}
    </Badge>
  );
};

export default BadgeComponent;
