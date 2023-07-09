import { Box, IconButton, Stack, styled } from "@mui/material";
import { UserMenu } from "../user-menu";
import { Icon } from "../icon";

const AnswerCard = styled(Box)(() => ({
  backgroundColor: "var(--color-tertiary)",
  padding: "24px",
  display: "flex",
  width: "100%",
  flexDirection: "column",
  gap: "32px",
  borderRadius: " 0px 24px 24px 24px",
  border: "0.8px solid var(--color-light)",
}));

const Answer = () => {
  return (
    <AnswerCard>
      <UserMenu />

      <p>Lorem ipsum is a simply</p>

      <Stack direction={"row"} style={{ display: "flex", justifyContent: "space-between" }}>
        <Stack direction={"row"} spacing={2}>
          <IconButton>
            <Icon name={"FiThumbsDown"} />
          </IconButton>

          <IconButton>
            <Icon name={"FiThumbsUp"} />
          </IconButton>
        </Stack>

        <p>26/07/2023</p>
      </Stack>
    </AnswerCard>
  );
};

export default Answer;
