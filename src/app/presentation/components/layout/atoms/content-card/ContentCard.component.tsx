import { Box, Stack, styled } from "@mui/material";
import { Badge } from "../badge";
import { Button } from "../button";
import { FiMoreVertical, FiMusic } from "react-icons/fi";
import { TextIcon } from "../text-icon";

const ContentCardContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  height: "300px",
  width: "600px",
  justifyContent: "space-between",
  backgroundColor: "var(--color-tertiary)",
  padding: "32px",
  borderRadius: "var(--border-radius-default)",
}));

const ContentCardHeaderContainer = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "space-between",
}));

const ContentCardTitleContainer = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "space-between",
}));

export const ContentCard = () => {
  return (
    <ContentCardContainer>
      <ContentCardHeaderContainer>
        <Badge mainColor={"#CC54C5"} borderRadius={"99px"} height={"32px"}>
          <TextIcon iconName={"FiMusic"} text={"Música"} iconPosition={"left"} />
        </Badge>

        <Button buttonClass={"secondary"}>
          <FiMoreVertical />
        </Button>
      </ContentCardHeaderContainer>

      <ContentCardTitleContainer>
        <h3>Título de Discussão</h3>
        <p>#151639</p>
      </ContentCardTitleContainer>

      <Stack spacing={1}>
        <TextIcon iconName={"FiBook"} text={"Book"} iconPosition={"left"} />

        <TextIcon iconName={"FiFeather"} text={"Autor"} iconPosition={"left"} />
      </Stack>

      <p style={{ width: "fit-content" }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </p>

      <TextIcon iconName={"FiGlobe"} text={"Samba"} iconPosition={"left"} />
      <Button buttonClass={"tertiary"}>
        <TextIcon iconName={"FiArrowRight"} text={"Ver discussão"} iconPosition={"right"} />
      </Button>
    </ContentCardContainer>
  );
};

export default ContentCard;
