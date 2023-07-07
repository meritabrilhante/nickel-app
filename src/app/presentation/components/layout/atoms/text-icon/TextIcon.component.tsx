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
  iconPosition: string;
}

export const TextIcon = ({ iconName, text, iconPosition }: TextIconPropns) => {
  return (
    <ContentCardContainer>
      {iconPosition === "left" ? (
        <>
          <Icon name={iconName} />
          {text}
        </>
      ) : (
        <>
          {text}
          <Icon name={iconName} />
        </>
      )}
    </ContentCardContainer>
  );
};

export default TextIcon;
