import MainLayout from "@/app/presentation/components/layout/main-layout/MainLayout.component";
import { Box, Stack, styled } from "@mui/material";
import { Breadcrumbs } from "@/app/presentation/components/layout/atoms/breadcrumbs";
import { Button } from "@/app/presentation/components/layout/atoms/button";
import { TextIcon } from "@/app/presentation/components/layout/atoms/text-icon";
import { TitleHeader } from "@/app/presentation/components/layout/atoms/title-header";
import Answer from "@/app/presentation/components/layout/atoms/answer/Answer.component";
import DiscussionCard from "@/app/presentation/components/layout/atoms/content-card/DiscussionCard.component";
import { Badge } from "@/app/presentation/components/layout/atoms/badge";

const DiscussionContainer = styled(Box)(() => ({
  display: "flex",
  padding: "32px 0",
  flexDirection: "column",
  height: "100vh",
  gap: "40px",
}));

const TitleContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const Discussion = () => {
  const breadcrumbsPath = [
    { label: "Home", link: "/home" },
    { label: "Título da Discussão", link: "/" },
  ];

  return (
    <MainLayout
      width={"100%"}
      pageTitle={"Título da Discussão"}
      mainButton={true}
      mainButtonLabel={<TextIcon iconName={"FiPlus"} text={"Responder"} iconPosition={"left"} />}
      mainButtonAction={"/answers/new"}
    >
      <DiscussionContainer>
        <Stack spacing={2}>
          <Breadcrumbs path={breadcrumbsPath} />
          <TitleContainer>
            <h1>Discussão</h1>

            <p>#123456</p>
          </TitleContainer>
        </Stack>

        <DiscussionCard
          discussionTitle={"Qual é o principal mistério presente no enredo de Dom Casmurro?"}
          discussionId={"#123456"}
          description={"Como ele influencia a narrativa?"}
          badge={
            <Badge mainColor={"#5FEE98"} borderRadius={"9999px"} height={"32px"}>
              <TextIcon iconName={"FiBook"} text={"Literatura Brasileira"} iconPosition={"left"} />
            </Badge>
          }
          author={"Machado de Assis"}
          bookName={"Dom Casmurro"}
        />

        <Stack
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <h2>Respostas</h2>

          <Button buttonClass={"tertiary"} width={"200px"}>
            <TextIcon iconName={"FiFilter"} text={"Mais Relevante"} iconPosition={"left"} />
          </Button>
        </Stack>

        <Answer
          answer={
            "O principal mistério presente no enredo é se o protagonista, Bento Santiago (ou Bentinho), foi traído por sua esposa, Capitu, com seu melhor amigo, Escobar. Essa suspeita de traição permeia a narrativa e gera uma grande dúvida em relação à fidelidade de Capitu e à verdade dos fatos. Ao longo da história, Machado de Assis utiliza recursos narrativos habilidosos para deixar o leitor em suspense e criar ambiguidades em relação aos eventos. A incerteza sobre a traição de Capitu influencia a forma como interpretamos os personagens e suas ações ao longo do livro, adicionando camadas de complexidade emocional e psicológica"
          }
        />
      </DiscussionContainer>
    </MainLayout>
  );
};

export default Discussion;
