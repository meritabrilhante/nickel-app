import { IconButton, Stack } from "@mui/material";
import { Badge } from "../badge";
import { Button } from "../button";
import { TextIcon } from "../text-icon";
import Icon from "../icon/Icon.component";
import {
  ContentCardContainer,
  ContentCardHeaderContainer,
  ContentCardTitleContainer,
} from "./ContentCard";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { DeleteButton } from "../delete-button";
import MenuComponent from "../menu/Menu.Component";

export interface RoomCardProps {
  visibility: "lock" | "unlock";
}

export const RoomCard = ({ visibility }: RoomCardProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/categories");
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClickModal = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const options = [
    {
      label: (
        <DeleteButton
          modalTitle={"Tem certeza que deseja deletar a sala?"}
          modalMessage={"A ação é permanente e não será possível reverte-la."}
        />
      ),
      onItemClick: () => console.log("Não deveria estar aqui"),
    },
    {
      label: <p>← Cancelar</p>,
      onItemClick: handleClose,
    },
  ];

  return (
    <ContentCardContainer>
      <ContentCardHeaderContainer>
        <Badge mainColor={"#CC54C5"} borderRadius={"99px"} height={"32px"} onClick={handleClick}>
          <TextIcon iconName={"FiMusic"} text={"Música"} iconPosition={"left"} />
        </Badge>

        <IconButton
          onClick={handleClickModal}
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <Icon name={"FiMoreVertical"} />
        </IconButton>

        {anchorEl && (
          <MenuComponent
            options={options}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            onItemClick={(option) => option.onItemClick()}
          />
        )}
      </ContentCardHeaderContainer>

      <ContentCardTitleContainer>
        <h2>Literatura Brasileira</h2>
        <p>#151639</p>
      </ContentCardTitleContainer>

      <TextIcon iconName={"FiHome"} text={"Instituição"} iconPosition={"left"} />

      <p style={{ width: "fit-content" }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </p>

      <Stack direction={"row"} style={{ display: "flex", justifyContent: "space-between" }}>
        <Stack direction={"row"} spacing={2}>
          <TextIcon iconName={"FiUsers"} text={"16"} iconPosition={"left"} />
          {visibility === "lock" ? (
            <TextIcon iconName={"FiLock"} text={"privada"} iconPosition={"left"} />
          ) : (
            <TextIcon iconName={"FiUnlock"} text={"pública"} iconPosition={"left"} />
          )}
        </Stack>

        <Button buttonClass={"tertiary"} size={"small"} mainColor={""}>
          <TextIcon iconName={"FiArrowRight"} text={"Ver Sala"} iconPosition={"right"} />
        </Button>
      </Stack>
    </ContentCardContainer>
  );
};

export default RoomCard;
