import { Box, styled } from "@mui/material";

export const ContentCardContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  justifyContent: "space-between",
  backgroundColor: "var(--color-tertiary)",
  padding: "32px",
  borderRadius: "var(--border-radius-default)",
}));

export const ContentCardHeaderContainer = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "space-between",
}));

export const ContentCardTitleContainer = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "space-between",
}));
