import { Box, styled } from "@mui/material";
import UserMenu from "../user-menu/UserMenu.component";

const ContentHeaderContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  width: "92%",
  padding: "24px 0",
  marginLeft: "4%",
  marginRight: "4%",
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
