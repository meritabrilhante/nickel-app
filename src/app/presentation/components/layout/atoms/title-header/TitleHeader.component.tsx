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
      <Stack direction={"row"}>
        <h1>{title}</h1>
        {button}
      </Stack>
      {description}
    </TitleHeaderContainer>
  );
};

export default TitleHeader;
