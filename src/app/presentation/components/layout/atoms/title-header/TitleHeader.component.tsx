import styled from "@emotion/styled";
import { Box, Stack } from "@mui/material";

const TitleHeaderContainer = styled(Box)(() => ({
  display: "flex",
  alignItems: "flex-start",
  flexDirection: "row",
  justifyContent: "space-between",
  width: "100%",
}));

export interface TitleHeaderComponentProps {
  title: string;
  description: string;
}

const TitleHeader = ({ title, description }: TitleHeaderComponentProps) => {
  return (
    <TitleHeaderContainer>
      <h1 style={{ width: "80%", lineHeight: "140%" }}>{title}</h1>
      {description}
    </TitleHeaderContainer>
  );
};

export default TitleHeader;
