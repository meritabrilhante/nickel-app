import { Stack } from "@mui/material";
import { Badge } from "../badge";
import { Button } from "../button";
import { TextIcon } from "../text-icon";
import {
  ContentCardContainer,
  ContentCardHeaderContainer,
  ContentCardTitleContainer,
} from "./ContentCard";
import { useRouter } from "next/router";

export const InteractionCard = ({ titulo, badgeColor, texto, id, react }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/categories");
  };

  return (
    <ContentCardContainer>
      <ContentCardHeaderContainer>
        <Badge mainColor={badgeColor} borderRadius={"99px"} height={"32px"} onClick={handleClick}>
          {texto}
        </Badge>
        <p>{id}</p>
      </ContentCardHeaderContainer>

      <ContentCardTitleContainer>
        <h2>{titulo}</h2>
      </ContentCardTitleContainer>

      {react ? (
        <p style={{ width: "fit-content", display: "flex", alignItems: "center" }}>
          <TextIcon iconName={"FiThumbsUp"} text={""} iconPosition={"left"} />
          <p style={{ marginLeft: "20px" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </p>
      ) : react === false ? (
        <p style={{ width: "fit-content", display: "flex", alignItems: "center" }}>
          <TextIcon iconName={"FiThumbsDown"} text={""} iconPosition={"left"} />
          <p style={{ marginLeft: "20px" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </p>
      ) : (
        <p style={{ width: "fit-content", display: "flex", alignItems: "center" }}>
          <p style={{ marginLeft: "20px" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </p>
      )}

      <Stack direction={"row"} style={{ display: "flex", justifyContent: "space-between" }}>
        <Stack direction={"row"} spacing={2} style={{ opacity: "0%" }}>
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

export default InteractionCard;
