import MainLayout from "@/app/presentation/components/layout/main-layout/MainLayout.component";
import { Box, Divider, Stack, styled } from "@mui/material";
import { Breadcrumbs } from "@/app/presentation/components/layout/atoms/breadcrumbs";
import { TextIcon } from "@/app/presentation/components/layout/atoms/text-icon";
import { TitleHeader } from "@/app/presentation/components/layout/atoms/title-header";
import KeyValue from "@/app/presentation/components/layout/atoms/key-value/KeyValue.component";
import { Badge } from "@/app/presentation/components/layout/atoms/badge";
import { UserMenu } from "@/app/presentation/components/layout/atoms/user-menu";
import Image from "next/image";
import { cover } from "public/assets/images";

const RoomContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  height: "100vh",
  width: "30%",
}));

export const RoomId = () => {
  const breadcrumbsPath = [
    { label: "Home", link: "/home" },
    { label: "Salas", link: "/rooms" },
    { label: "Esta Sala", link: "/" },
  ];

  return (
    <MainLayout
      width={"100%"}
      pageTitle={"Título da Sala"}
      mainButton={true}
      mainButtonLabel={
        <TextIcon iconName={"FiPlus"} text={"Criar Discussão"} iconPosition={"left"} />
      }
      mainButtonAction={"/discussions/new"}
    >
      <RoomContainer>
        <Stack
          spacing={4}
          style={{ display: "flex", justifyContent: "space-between", width: "100%" }}
        >
          <Breadcrumbs path={breadcrumbsPath} />

          <Stack spacing={4} style={{ width: "100%" }}>
            <TitleHeader title={"Título da Sala"} description={"0x8B5F2A"} />

            <Image src={cover} alt={""} width={470} height={300} layout="responsive" />
          </Stack>

          <Stack spacing={4}>
            <h2>Descrição</h2>

            <p>Lorem ipsum is a simply dumb text</p>
          </Stack>

          <Stack
            direction={"row"}
            spacing={2}
            style={{ display: "flex", width: "100%", justifyContent: "space-between" }}
          >
            <Box
              style={{
                border: "1px solid var(--color-primary-pure)",
                padding: "16px",
                borderRadius: "0px 16px 16px 16px",
                color: "var(--color-primary-pure)",
                width: "100%",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <TextIcon iconName={"FiUsers"} text={"16"} iconPosition={"left"} />
              Participantes
            </Box>

            <Box
              style={{
                border: "1px solid #3E4ED9",
                padding: "16px",
                borderRadius: "0px 16px 16px 16px",
                color: "#3E4ED9",
                width: "100%",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <TextIcon iconName={"FiMessageCircle"} text={"16"} iconPosition={"left"} />
              Discussões
            </Box>
          </Stack>

          <h2>Dados</h2>

          <Stack spacing={2}>
            <KeyValue textKey={<p>ID da sala:</p>} value={<p>#151628</p>} />
            <KeyValue
              textKey={<p>Categoria:</p>}
              value={
                <p>
                  <Badge mainColor={"#5FEE98"} borderRadius={"999px"} height={"32px"}>
                    Categoria
                  </Badge>
                </p>
              }
            />
            <KeyValue textKey={<p>Criada em:</p>} value={<p>26/07/2023</p>} />
            <KeyValue textKey={<p>Instituição:</p>} value={<p>Instituto Federal de Brasília</p>} />
            <KeyValue
              textKey={<p>Visbilidade:</p>}
              value={<TextIcon iconName={"FiLock"} text={"Privada"} iconPosition={"left"} />}
            />
            <KeyValue textKey={<p>Senha:</p>} value={<p>*********</p>} />

            <Divider color={"#E1E1E6"} />
          </Stack>

          <Stack spacing={4}>
            <h2>Administradores</h2>

            <UserMenu />

            <Divider color={"#E1E1E6"} />
          </Stack>

          <Stack spacing={4}>
            <h2>Participantes</h2>

            <UserMenu />

            <Divider color={"#E1E1E6"} />
          </Stack>
        </Stack>
      </RoomContainer>
    </MainLayout>
  );
};

export default RoomId;
