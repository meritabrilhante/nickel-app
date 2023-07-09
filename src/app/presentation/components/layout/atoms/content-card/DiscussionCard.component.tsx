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
import MenuComponent from "../menu/Menu.Component";
import React, { useState } from "react";
import { Modal } from "../modal";
import { DeleteButton } from "../delete-button";

export const DiscussionCard = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/categories");
  };

  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openArchiveModal, setOpenArchiveModal] = useState(false);

  const handleOpenDeleteModal = () => {
    setOpenDeleteModal(true);
  };

  const handleOpenArchiveModal = () => {
    setOpenArchiveModal(true);
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
      label: <TextIcon iconName={"FiArchive"} text={"Arquivar"} iconPosition={"left"} />,
      onItemClick: handleOpenArchiveModal,
    },
    {
      label: (
        <DeleteButton
          modalTitle={"Tem certeza que deseja deletar a discussão?"}
          modalMessage={"A ação é permanente e não será possível reverte-la."}
        />
      ),
      onItemClick: console.log("Não deveria estar aqui"),
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
        <h2>Título de Discussão</h2>
        <p>#151639</p>
      </ContentCardTitleContainer>

      <Stack spacing={1}>
        <TextIcon iconName={"FiBook"} text={"Book"} iconPosition={"left"} />

        <TextIcon iconName={"FiFeather"} text={"Autor"} iconPosition={"left"} />
      </Stack>

      <p style={{ width: "fit-content" }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </p>

      <Stack direction={"row"} style={{ display: "flex", justifyContent: "space-between" }}>
        <Stack direction={"row"} spacing={2}>
          <TextIcon iconName={"FiThumbsUp"} text={"1"} iconPosition={"left"} />
          <TextIcon iconName={"FiMessageCircle"} text={"1"} iconPosition={"left"} />
        </Stack>

        <Button buttonClass={"tertiary"} size={"small"} mainColor={""}>
          <TextIcon iconName={"FiArrowRight"} text={"Ver discussão"} iconPosition={"right"} />
        </Button>
      </Stack>

      <Modal
        icon={"info"}
        title={"Tem certeza que deseja arquivar esta discussão?"}
        message={"Ela estará disponível na sessão minhas interações"}
        open={openArchiveModal}
        onClose={() => {
          setOpenArchiveModal(false);
        }}
      >
        <>
          <Button
            buttonClass={"secondary"}
            mainColor={""}
            onClick={() => {
              setOpenArchiveModal(false);
            }}
          >
            ← Voltar
          </Button>

          <Button buttonClass={"secondary"} mainColor={""}>
            Arquivar
          </Button>
        </>
      </Modal>
    </ContentCardContainer>
  );
};

export default DiscussionCard;
