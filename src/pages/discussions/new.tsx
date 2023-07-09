import { Button } from "@/app/presentation/components/layout/atoms/button";
import { Breadcrumbs } from "@/app/presentation/components/layout/atoms/breadcrumbs";
import MainLayout from "@/app/presentation/components/layout/main-layout/MainLayout.component";
import { NewDiscussionForm } from "@/core/components/discussion/new";
import { Box, Stack, styled } from "@mui/material";
import { Modal } from "@/app/presentation/components/layout/atoms/modal";
import { useState } from "react";
import { useRouter } from "next/router";

const NewDiscussionContainer = styled(Box)(() => ({
  display: "flex",
  width: "30%",
  flexDirection: "column",
  gap: "32px",
  height: "100vh",
}));

export const NewDiscussion = () => {
  const breadcrumbsPath = [
    { label: "Home", link: "/home" },
    { label: "Nova Discussão", link: "/" },
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
    <MainLayout width={"100%"} pageTitle={"Nova Discussão"}>
      <NewDiscussionContainer>
        <Stack spacing={4}>
          <Breadcrumbs path={breadcrumbsPath} />
          <h1>Nova Discussão</h1>
        </Stack>

        <NewDiscussionForm></NewDiscussionForm>

        <Stack
          direction={"row"}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Button buttonClass={"secondary"} size={"large"} onClick={handleOpen} mainColor={""}>
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
            path={"home"}
          />

          <Button
            buttonClass={"primary"}
            size={"large"}
            onClick={() => {
              router.push("/discussions/discussionId");
            }}
            mainColor={""}
          >
            + Publicar
          </Button>
        </Stack>
      </NewDiscussionContainer>
    </MainLayout>
  );
};

export default NewDiscussion;
