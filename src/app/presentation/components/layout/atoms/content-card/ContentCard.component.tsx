import DiscussionCard from "./DiscussionCard.component";
import RoomCard from "./RoomCard.component";

export type ContentCardType = "room" | "discussion";

export interface ContentCardProps {
  type: ContentCardType;
}

export const ContentCard = ({ type }: ContentCardProps) => {
  return <>{type === "discussion" ? <DiscussionCard /> : <RoomCard visibility={"lock"} />}</>;
};

export default ContentCard;
