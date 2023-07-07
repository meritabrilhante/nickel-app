import { Box, styled } from "@mui/material";
import UserMenu from "../user-menu/UserMenu.component";

const ContentHeaderContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
}));

interface ContentHeaderProps {
  date: string;
}

export const ContentHeader = ({ date }: ContentHeaderProps) => {
  return (
    <ContentHeaderContainer>
      <UserMenu />
      <p>{date}</p>
    </ContentHeaderContainer>
  );
};

export default ContentHeader;
