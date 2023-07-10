import { Box, styled } from "@mui/material";
import InteractionCard from "./InteractionCard.component";

export type ContentCardType = "room" | "discussion";

export interface ContentCardProps {
  date: string;
  badgeColor: string;
  texto?: string;
  id: string;
  titulo: string;
  react?: boolean;
}
export const ContentContainer = styled(Box)(() => ({
  width: "100%",
  marginBottom: "0",
}));

export const ContentCard = ({ titulo, date, badgeColor, texto, id, react }: ContentCardProps) => {
  return (
    <ContentContainer>
      <p style={{ margin: "10px 0px 10px 0px" }}>{date}</p>
      <InteractionCard
        titulo={titulo}
        badgeColor={badgeColor}
        texto={texto}
        id={id}
        react={react}
      />
    </ContentContainer>
  );
};

export default ContentCard;
