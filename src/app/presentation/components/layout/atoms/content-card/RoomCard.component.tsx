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
import { Visibility } from "@mui/icons-material";
import { useRouter } from "next/router";

export interface RoomCardProps {
  visibility: "lock" | "unlock";
}

export const RoomCard = ({ visibility }: RoomCardProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/categories");
  };
  return (
    <ContentCardContainer>
      <ContentCardHeaderContainer>
        <Badge mainColor={"#CC54C5"} borderRadius={"99px"} height={"32px"} onClick={handleClick}>
          <TextIcon iconName={"FiMusic"} text={"Música"} iconPosition={"left"} />
        </Badge>

        <Button buttonClass={"secondary"}>
          <Icon name={"FiMoreVertical"} />
        </Button>
      </ContentCardHeaderContainer>

      <ContentCardTitleContainer>
        <h2>Literatura Brasileira</h2>
        <p>#151639</p>
      </ContentCardTitleContainer>

      <TextIcon iconName={"FiHome"} text={"Instituição"} iconPosition={"left"} />

      <p style={{ width: "fit-content" }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </p>

      <Stack direction={"row"} style={{ display: "flex", justifyContent: "space-between" }}>
        <Stack direction={"row"} spacing={2}>
          <TextIcon iconName={"FiUsers"} text={"16"} iconPosition={"left"} />
          {visibility === "lock" ? (
            <TextIcon iconName={"FiLock"} text={"privada"} iconPosition={"left"} />
          ) : (
            <TextIcon iconName={"FiUnlock"} text={"pública"} iconPosition={"left"} />
          )}
        </Stack>

        <Button buttonClass={"tertiary"} size={"small"}>
          <TextIcon iconName={"FiArrowRight"} text={"Ver Sala"} iconPosition={"right"} />
        </Button>
      </Stack>
    </ContentCardContainer>
  );
};

export default RoomCard;
