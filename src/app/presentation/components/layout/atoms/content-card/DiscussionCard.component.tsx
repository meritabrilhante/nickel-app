import { Stack } from "@mui/material";
import { Badge } from "../badge";
import { Button } from "../button";
import { TextIcon } from "../text-icon";
import Icon from "../icon/Icon.component";
import {
  ContentCardContainer,
  ContentCardHeaderContainer,
  ContentCardTitleContainer,
} from "./ContentCard";

export const DiscussionCard = () => {
  return (
    <ContentCardContainer>
      <ContentCardHeaderContainer>
        <Badge mainColor={"#CC54C5"} borderRadius={"99px"} height={"32px"}>
          <TextIcon iconName={"FiMusic"} text={"Música"} iconPosition={"left"} />
        </Badge>

        <Button buttonClass={"secondary"}>
          <Icon name={"FiMoreVertical"} />
        </Button>
      </ContentCardHeaderContainer>

      <ContentCardTitleContainer>
        <h2>Título de Discussão</h2>
        <p>#151639</p>
      </ContentCardTitleContainer>

      <Stack spacing={1}>
        <TextIcon iconName={"FiBook"} text={"Book"} iconPosition={"left"} />

        <TextIcon iconName={"FiFeather"} text={"Autor"} iconPosition={"left"} />
      </Stack>

      <p style={{ width: "fit-content" }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </p>

      <Stack direction={"row"} style={{ display: "flex", justifyContent: "space-between" }}>
        <Stack direction={"row"} spacing={2}>
          <TextIcon iconName={"FiThumbsUp"} text={"1"} iconPosition={"left"} />
          <TextIcon iconName={"FiMessageCircle"} text={"1"} iconPosition={"left"} />
        </Stack>

        <Button buttonClass={"tertiary"} size={"small"}>
          <TextIcon iconName={"FiArrowRight"} text={"Ver discussão"} iconPosition={"right"} />
        </Button>
      </Stack>
    </ContentCardContainer>
  );
};

export default DiscussionCard;
