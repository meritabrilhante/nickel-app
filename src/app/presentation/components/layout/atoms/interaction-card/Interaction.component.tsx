import { Box, Stack, styled } from "@mui/material";
import InteractionCard from "./InteractionCard.component";

export type ContentCardType = "room" | "discussion";

export interface ContentCardProps {
  date: string;
  badgeColor: string;
  texto?: string;
  id: string;
  titulo: string;
  react?: boolean;
  contentText?: string;
}
export const ContentContainer = styled(Box)(() => ({
  marginBottom: "0",
  width: "100%",
}));

export const ContentCard = ({
  titulo,
  date,
  badgeColor,
  texto,
  id,
  react,
  contentText,
}: ContentCardProps) => {
  return (
    <ContentContainer>
      <p style={{ marginBottom: "4%", marginLeft: "4%" }}>{date}</p>
      <InteractionCard
        titulo={titulo}
        badgeColor={badgeColor}
        texto={texto}
        id={id}
        react={react}
        contentText={contentText}
      />
    </ContentContainer>
  );
};

export default ContentCard;
