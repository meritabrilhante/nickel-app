import styled from "@emotion/styled";
import { Box, Stack } from "@mui/material";

const TitleHeaderContainer = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
}));

export interface TitleHeaderComponentProps {
  button?: React.ReactNode;
  leftIcon?: React.ReactNode;
  title: string;
  description?: string;
}

const TitleHeader = ({ title, button, description }: TitleHeaderComponentProps) => {
  return (
    <TitleHeaderContainer>
      <Stack
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <h1>{title}</h1>
        {button}
      </Stack>
      {description}
    </TitleHeaderContainer>
  );
};

export default TitleHeader;
