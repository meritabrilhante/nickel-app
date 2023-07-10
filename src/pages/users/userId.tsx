import { Avatar } from "@/app/presentation/components/layout/atoms/avatar";
import { Badge } from "@/app/presentation/components/layout/atoms/badge";
import { DeleteButton } from "@/app/presentation/components/layout/atoms/delete-button";
import InfoInput from "@/app/presentation/components/layout/atoms/info-input/InfoInput.component";
import MainLayout from "@/app/presentation/components/layout/main-layout/MainLayout.component";
import { Box, Divider, Stack, styled } from "@mui/material";
import { Button } from "@/app/presentation/components/layout/atoms/button";
import { TextIcon } from "@/app/presentation/components/layout/atoms/text-icon";

const ProfileUserContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justiyContent: "space-between",
  height: "100vh",
  width: "100%",
  gap: "40px",
}));

const ShowUserPage = () => {
  return (
    <MainLayout width={"100%"} pageTitle={"User Name"} mainButton={false}>
      <ProfileUserContainer>
        <Avatar height={"56px"} width={"56px"} />

        <Stack spacing={1} style={{ width: "100%" }}>
          <Stack
            direction={"row"}
            style={{ display: "flex", width: "100%", justifyContent: "space-between" }}
          >
            <h1>User Name</h1>

            <Button buttonClass={"tertiary"}>
              <TextIcon iconName={"FiSettings"} text={"Gerenciar"} iconPosition={"left"} />
            </Button>
          </Stack>

          <p>Instituição</p>
        </Stack>

        <Stack>
          <h2>Descrição</h2>
          <p>Lorem ipsum</p>
        </Stack>

        <InfoInput text={"1234567"} label={"ID do usuário"} />

        <Divider />

        <Stack spacing={4}>
          <h2>Emblemas</h2>

          <Stack spacing={2}>
            <h3>Emblemas Primários</h3>

            <Badge mainColor={"#FFD600"} borderRadius={"999px"} height={"32px"}>
              <TextIcon iconName={"FiZap"} text={"Agitador"} iconPosition={"left"} />
            </Badge>
          </Stack>

          <Stack spacing={2}>
            <h3>Todas as Conquistas</h3>

            <Badge mainColor={"#FFD600"} borderRadius={"999px"} height={"32px"}>
              <TextIcon iconName={"FiZap"} text={"Agitador"} iconPosition={"left"} />
            </Badge>
          </Stack>
        </Stack>

        <DeleteButton
          modalTitle={"Tem certeza que deseja excluir sua conta?"}
          modalMessage={"Essa açao é irreversível"}
        />
      </ProfileUserContainer>
    </MainLayout>
  );
};

export default ShowUserPage;
