import { Button } from "@/app/presentation/components/layout/atoms/button";
import { Textarea } from "@/app/presentation/components/layout/atoms/textarea";
import { UserMenu } from "@/app/presentation/components/layout/atoms/user-menu";
import { Box, Stack, styled } from "@mui/material";
import { useRouter } from "next/router";

const NewAnswerFormContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
}));

const NewAnswerForm = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <NewAnswerFormContainer>
      <Stack spacing={1}>
        <Textarea label={"Resposta* (obrigatório)"} />

        <UserMenu />
      </Stack>

      <Stack direction={"row"} spacing={2} style={{ marginTop: "5%" }}>
        <Button buttonClass={"secondary"} size={"large"} onClick={handleGoBack}>
          ← Cancelar
        </Button>

        <Button buttonClass={"primary"} size={"large"}>
          Publicar
        </Button>
      </Stack>
    </NewAnswerFormContainer>
  );
};

export default NewAnswerForm;
