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
  roomName: string;
  roomId: string;
  badge: React.ReactNode;
  description: string;
  institution: string;
}

export const RoomCard = ({
  visibility,
  roomName,
  roomId,
  badge,
  description,
  institution,
}: RoomCardProps) => {
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
        {badge}

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
        <h2>{roomName}</h2>
        <p>{roomId}</p>
      </ContentCardTitleContainer>

      <TextIcon iconName={"FiHome"} text={institution} iconPosition={"left"} />

      <p style={{ width: "fit-content" }}>{description}</p>

      <Stack direction={"row"} style={{ display: "flex", justifyContent: "space-between" }}>
        <Stack direction={"row"} spacing={2}>
          <TextIcon iconName={"FiUsers"} text={"16"} iconPosition={"left"} />
          {visibility === "lock" ? (
            <TextIcon iconName={"FiLock"} text={"privada"} iconPosition={"left"} />
          ) : (
            <TextIcon iconName={"FiUnlock"} text={"pública"} iconPosition={"left"} />
          )}
        </Stack>

        <Button
          buttonClass={"tertiary"}
          size={"small"}
          width={"200px"}
          onClick={() => {
            router.push("rooms/roomId");
          }}
        >
          <TextIcon iconName={"FiArrowRight"} text={"Ver Sala"} iconPosition={"right"} />
        </Button>
      </Stack>
    </ContentCardContainer>
  );
};

export default RoomCard;
