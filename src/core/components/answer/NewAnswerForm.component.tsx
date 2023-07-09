import { Button } from "@/app/presentation/components/layout/atoms/button";
import { Textarea } from "@/app/presentation/components/layout/atoms/textarea";
import { UserMenu } from "@/app/presentation/components/layout/atoms/user-menu";
import { Box, Stack, styled } from "@mui/material";

const NewAnswerFormContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
}));

const NewAnswerForm = () => {
  return (
    <NewAnswerFormContainer>
      <Stack spacing={1}>
        <Textarea label={"Resposta* (obrigatório)"} />

        <UserMenu />
      </Stack>

      <Stack direction={"row"} spacing={2} style={{ marginTop: "5%" }}>
        <Button buttonClass={"secondary"} mainColor={""} size={"large"}>
          ← Cancelar
        </Button>

        <Button buttonClass={"primary"} mainColor={""} size={"large"}>
          Publicar
        </Button>
      </Stack>
    </NewAnswerFormContainer>
  );
};

export default NewAnswerForm;
