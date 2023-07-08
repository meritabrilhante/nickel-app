import MainLayout from "@/app/presentation/components/layout/main-layout/MainLayout.component";
import { Box, Stack, styled } from "@mui/material";
import { Badge } from "@/app/presentation/components/layout/atoms/badge";
import { TextIcon } from "@/app/presentation/components/layout/atoms/text-icon";
import { Button } from "@/app/presentation/components/layout/atoms/button";

const HomeContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justiyContent: "space-between",
}));

const Category = ({ mainColor, iconName, text, iconPosition, borderRadius }) => (
  <Badge width={"17vh"} mainColor={mainColor} borderRadius={borderRadius} height={"65px"}>
    <TextIcon iconName={iconName} text={text} iconPosition={iconPosition} />
  </Badge>
);

export const CategoriesPage = () => {
  return (
    <MainLayout width={"100%"} pageTitle={"Home"}>
      <HomeContainer>
        <Stack
          direction={"row"}
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            marginBottom: "16px",
          }}
        >
          <h1>Categorias</h1>
          <Button buttonClass={"tertiary"}>
            <TextIcon iconName={"FiTrello"} text={"Alfabética"} iconPosition={"right"} />
          </Button>
        </Stack>

        <Stack spacing={2}>
          <Stack spacing={3} direction={"row"}>
            <Category
              mainColor={"#CC54C5"}
              borderRadius={"4px"}
              iconName={"FiSmile"}
              text={"Artes"}
              iconPosition={"left"}
            ></Category>
            <Category
              mainColor={"#3E4ED9"}
              borderRadius={"4px"}
              iconName={"FiMusic"}
              text={"Biografia"}
              iconPosition={"left"}
            ></Category>
            <Category
              mainColor={"#133B5C"}
              borderRadius={"4px"}
              iconName={"FiMusic"}
              text={"Biologia"}
              iconPosition={"left"}
            ></Category>
          </Stack>

          <Stack spacing={3} direction={"row"}>
            <Category
              mainColor={"#5D8A90"}
              borderRadius={"4px"}
              iconName={"FiMusic"}
              text={"Brasileira"}
              iconPosition={"left"}
            ></Category>
            <Category
              mainColor={"#3B949A"}
              borderRadius={"4px"}
              iconName={"FiMusic"}
              text={"Ciência"}
              iconPosition={"left"}
            ></Category>
            <Category
              mainColor={"#042C92"}
              borderRadius={"4px"}
              iconName={"FiMusic"}
              text={"Cinema"}
              iconPosition={"left"}
            ></Category>
          </Stack>

          <Stack spacing={3} direction={"row"}>
            <Category
              mainColor={"#7A5D90"}
              borderRadius={"4px"}
              iconName={"FiMusic"}
              text={"Drama"}
              iconPosition={"left"}
            ></Category>
            <Category
              mainColor={"#07ADD1"}
              borderRadius={"4px"}
              iconName={"FiMusic"}
              text={"Fantasia"}
              iconPosition={"left"}
            ></Category>
            <Category
              mainColor={"#8047CA"}
              borderRadius={"4px"}
              iconName={"FiMusic"}
              text={"Ficção Científica"}
              iconPosition={"left"}
            ></Category>
          </Stack>

          <Stack spacing={3} direction={"row"}>
            <Category
              mainColor={"#90825D"}
              borderRadius={"4px"}
              iconName={"FiMusic"}
              text={"História"}
              iconPosition={"left"}
            ></Category>
            <Category
              mainColor={"#F5A122"}
              borderRadius={"4px"}
              iconName={"FiMusic"}
              text={"Juvenil"}
              iconPosition={"left"}
            ></Category>
            <Category
              mainColor={"#905D7C"}
              borderRadius={"4px"}
              iconName={"FiMusic"}
              text={"Línguas"}
              iconPosition={"left"}
            ></Category>
          </Stack>

          <Stack spacing={3} direction={"row"}>
            <Category
              mainColor={"#30864D"}
              borderRadius={"4px"}
              iconName={"FiMusic"}
              text={"Música"}
              iconPosition={"left"}
            ></Category>
            <Category
              mainColor={"#F44336"}
              borderRadius={"4px"}
              iconName={"FiMusic"}
              text={"Romance"}
              iconPosition={"left"}
            ></Category>
            <Category
              mainColor={"#ED1845"}
              borderRadius={"4px"}
              iconName={"FiMusic"}
              text={"Tecnologia"}
              iconPosition={"left"}
            ></Category>
          </Stack>
        </Stack>
      </HomeContainer>
    </MainLayout>
  );
};

export default CategoriesPage;
