import { ButtonProps, Stack, styled } from "@mui/material";
import { TextIcon } from "../text-icon";
import { useState } from "react";
import { useRouter } from "next/router";
import React from "react";
import { Button } from "../button";
import { Modal } from "../modal";

interface DeleteButtonProps {
  action?: string;
  modalTitle: string;
  modalMessage: string;
}

const DeleteButton = ({ modalMessage, modalTitle, action }: DeleteButtonProps) => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const handleOpenDeleteModal = () => {
    setOpenDeleteModal(true);
  };

  const handleClick = () => {
    const router = useRouter();

    router.push(`${action}`);
  };

  return (
    <>
      <Button
        onClick={handleOpenDeleteModal}
        buttonClass={"secondary"}
        mainColor={"var(--color-error-pure)"}
      >
        <TextIcon iconName={"FiTrash2"} text={"Excluir"} iconPosition={"left"} />
      </Button>

      <Modal
        icon={"error"}
        title={modalTitle}
        message={modalMessage}
        open={openDeleteModal}
        onClose={() => {
          setOpenDeleteModal(false);
        }}
      >
        <Stack spacing={2} direction={"row"} style={{ display: "flex", width: "100%" }}>
          <Button
            buttonClass={"secondary"}
            mainColor={""}
            onClick={() => {
              setOpenDeleteModal(false);
            }}
            size={"large"}
          >
            ← Voltar
          </Button>

          <Button buttonClass={"primary"} mainColor={""} onClick={handleClick}>
            Confirmar
          </Button>
        </Stack>
      </Modal>
    </>
  );
};

export default DeleteButton;
