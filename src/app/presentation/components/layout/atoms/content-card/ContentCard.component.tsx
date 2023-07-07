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
  padding: "0 0 16px 0",
  justifyContent: "space-between",
}));

export const ContentCard = () => {
  return (
    <ContentCardContainer>
      <ContentCardHeaderContainer>
        <Badge mainColor={"#CC54C5"} borderRadius={"99px"} height={"40px"}>
          <TextIcon iconName={"FiMusic"} text={"Música"} />
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
        <TextIcon iconName={"FiBook"} text={"Book"} />

        <TextIcon iconName={"FiFeather"} text={"Autor"} />
      </Stack>

      <p>Lorem ipsum is a simply</p>

      <TextIcon iconName={"FiGlobe"} text={"Samba"} />
    </ContentCardContainer>
  );
};

export default ContentCard;
