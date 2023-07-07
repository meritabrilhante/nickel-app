import { Box, styled } from "@mui/material";
import { Icon } from "../icon";

const ContentCardContainer = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  gap: "4px",
  width: "100%",
}));

interface TextIconPropns {
  iconName: string;
  text: string;
}

export const TextIcon = ({ iconName, text }: TextIconPropns) => {
  return (
    <ContentCardContainer>
      <Icon name={iconName} />
      {text}
    </ContentCardContainer>
  );
};

export default TextIcon;
