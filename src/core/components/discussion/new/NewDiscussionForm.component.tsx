import { Button } from "@/app/presentation/components/layout/atoms/button";
import { Input } from "@/app/presentation/components/layout/atoms/input";
import { Modal } from "@/app/presentation/components/layout/atoms/modal";
import { Select } from "@/app/presentation/components/layout/atoms/select";
import { Textarea } from "@/app/presentation/components/layout/atoms/textarea";
import { Box, Stack, styled } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";

const NewDiscussionFormContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
}));

export const NewDiscussionForm = () => {
  const menuItems = [
    { label: "Não publicar em uma sala", value: 10 },
    { label: "Literatura Brasileira", value: 10 },
  ];

  const router = useRouter();

  const [openModal, setOpenModal] = useState(false);

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleOpen = () => {
    setOpenModal(true);
  };

  return (
    <NewDiscussionFormContainer>
      <Stack spacing={8}>
        <Input label={"Título* (obrigatório)"} placeholder={"Digite aqui sua pergunta"} />

        <Input label={"Categoria* (obrigatório)"} placeholder={"Selecione uma categoria"} />

        <Input label={"Obra ou Assunto"} placeholder={"Ex.: Dom Casmurro"} />

        <Input label={"Autor"} placeholder={"Ex.: Machado de Assis"} />

        <Textarea label={"Descreva sua pergunta"} />

        <Stack direction={"row"} spacing={1}>
          <Button buttonClass={"secondary"} size={"large"} onClick={handleOpen}>
            ← Voltar
          </Button>

          <Modal
            open={openModal}
            onClose={() => {
              setOpenModal(false);
            }}
            icon={"info"}
            children={<></>}
            title={"Tem certeza que deseja sair?"}
            message={"Você perderá as informações sobre a discussão"}
          />

          <Button
            buttonClass={"primary"}
            size={"large"}
            onClick={() => {
              router.push("/discussions/discussionId");
            }}
          >
            + Publicar
          </Button>
        </Stack>
      </Stack>
    </NewDiscussionFormContainer>
  );
};

export default NewDiscussionForm;
