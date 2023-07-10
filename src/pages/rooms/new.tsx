import { Button } from "@/app/presentation/components/layout/atoms/button";
import { Breadcrumbs } from "@/app/presentation/components/layout/atoms/breadcrumbs";
import MainLayout from "@/app/presentation/components/layout/main-layout/MainLayout.component";
import { NewDiscussionForm } from "@/core/components/discussion/new";
import { Box, Stack, styled } from "@mui/material";
import { Modal } from "@/app/presentation/components/layout/atoms/modal";
import { useState } from "react";
import { useRouter } from "next/router";
import NewRoomForm from "@/core/components/room/NewRoomForm.component";

const NewRoomContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "40px",
  padding: "32px 0",
}));

const TitleContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const NewRoom = () => {
  const breadcrumbsPath = [
    { label: "Home", link: "/home" },
    { label: "Minhas Salas", link: "/my_rooms" },
    { label: "Criar Salas", link: "/" },
  ];

  const router = useRouter();

  const [openModal, setOpenModal] = useState(false);

  const handleOpen = () => {
    setOpenModal(true);
  };

  return (
    <MainLayout width={"100%"} pageTitle={"Criar Sala"} mainButton={false}>
      <NewRoomContainer>
        <Stack spacing={2}>
          <Breadcrumbs path={breadcrumbsPath} />
          <TitleContainer>
            <h1>Criar Sala</h1>
          </TitleContainer>
        </Stack>

        <NewRoomForm />

        <Stack
          direction={"row"}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
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
              router.push("/rooms/roomId");
            }}
          >
            + Criar Sala
          </Button>
        </Stack>
      </NewRoomContainer>
    </MainLayout>
  );
};

export default NewRoom;
