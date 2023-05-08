import React from "react"
import { Box, styled } from "@mui/material"
import { hexToRgb } from "@/app/presentation/utils/hex-rgb"

const Badge = styled(Box)(({ mainColor, borderRadius, height }: BadgeProps) => ({
  display: "flex",
  alignItems: "center",
  color: `${mainColor}`,
  background: hexToRgb(mainColor),
  borderRadius: borderRadius,
  border: `2px solid ${mainColor}`,
  paddingLeft: "1rem",
  paddingRight: "1rem",
  height: height,
}))

interface BadgeProps {
  children?: React.ReactNode
  mainColor: string
  borderRadius: string
  height: string
}

const BadgeComponent = ({ children, mainColor, borderRadius, height }: BadgeProps) => {
  return (
    <Badge mainColor={mainColor} borderRadius={borderRadius} height={height}>
      {children}
    </Badge>
  )
}

export default BadgeComponent
