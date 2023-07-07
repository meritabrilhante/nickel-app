import { Box, styled } from "@mui/material";
import ContentHeader from "../content-header/ContentHeader.component";
import DiscussionCard from "./DiscussionCard.component";
import RoomCard from "./RoomCard.component";

export type ContentCardType = "room" | "discussion";

export interface ContentCardProps {
  type: ContentCardType;
}

export const ContentContainer = styled(Box)(() => ({
  marginBottom: "0",
}));

export const ContentCard = ({ type }: ContentCardProps) => {
  return (
    <ContentContainer>
      <ContentHeader date={"24/07/2023"} />

      {type === "discussion" ? <DiscussionCard /> : <RoomCard visibility={"lock"} />}
    </ContentContainer>
  );
};

export default ContentCard;
