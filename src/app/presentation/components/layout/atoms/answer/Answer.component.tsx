import { Box, IconButton, Stack, styled } from "@mui/material";
import { UserMenu } from "../user-menu";
import { Icon } from "../icon";

const AnswerCard = styled(Box)(() => ({
  backgroundColor: "var(--color-tertiary)",
  padding: "24px",
  display: "flex",
  gap: "24px",
  flexDirection: "column",
  borderRadius: " 24px 24px 0px 24px",
  border: "0.8px solid var(--color-success-pure)",
}));

interface AnswerProps {
  answer: string;
}

const Answer = ({ answer }: AnswerProps) => {
  return (
    <AnswerCard>
      <UserMenu />

      <p>{answer}</p>

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
