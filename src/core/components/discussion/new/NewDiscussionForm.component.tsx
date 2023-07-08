import { Input } from "@/app/presentation/components/layout/atoms/input";
import { Select } from "@/app/presentation/components/layout/atoms/select";
import { Textarea } from "@/app/presentation/components/layout/atoms/textarea";
import { Box, Stack, styled } from "@mui/material";

const NewDiscussionFormContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
}));

export const NewDiscussionForm = () => {
  const menuItems = [
    { label: "Não publicar em uma sala", value: 10 },
    { label: "Literatura Brasileira", value: 10 },
  ];

  return (
    <NewDiscussionFormContainer>
      <Stack spacing={8}>
        <Input label={"Título* (obrigatório)"} placeholder={"Digite aqui sua pergunta"} />

        <Input label={"Categoria* (obrigatório)"} placeholder={"Selecione uma categoria"} />

        <Input label={"Obra ou Assunto"} placeholder={"Ex.: Dom Casmurro"} />

        <Input label={"Autor"} placeholder={"Ex.: Machado de Assis"} />

        <Textarea label={"Descreva sua pergunta"} />

        <Select label={"Publicar em uma sala?* (obrigatório)"} menuItems={menuItems} />
      </Stack>
    </NewDiscussionFormContainer>
  );
};

export default NewDiscussionForm;
