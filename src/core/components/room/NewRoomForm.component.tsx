import { Input } from "@/app/presentation/components/layout/atoms/input";
import { Textarea } from "@/app/presentation/components/layout/atoms/textarea";
import { Box, Stack, Switch, styled } from "@mui/material";

const NewRoomFormContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
}));

export const NewRoomForm = () => {
  return (
    <NewRoomFormContainer>
      <Stack spacing={8}>
        <Input label={"Título* (obrigatório)"} placeholder={"Digite aqui sua pergunta"} />

        <Input label={"Categoria* (obrigatório)"} placeholder={"Selecione uma categoria"} />

        <Input label={"Instituição"} placeholder={"Ex.: Instituto Federal de Brasília"} />

        <Textarea label={"Descreva sua pergunta"} />

        <Stack>
          <p>Visibilidade* (obrigatório)</p>
          <Box style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "4px" }}>
            <Switch />
            <p>Privada</p>
          </Box>
        </Stack>
      </Stack>
    </NewRoomFormContainer>
  );
};

export default NewRoomForm;
