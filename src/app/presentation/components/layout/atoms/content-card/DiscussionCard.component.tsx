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

interface DiscussionCardProps {
  discussionTitle: string;
  discussionId: string;
  description: string;
  badge: React.ReactNode;
  bookName?: string;
  author?: string;
}

export const DiscussionCard = ({
  discussionId,
  discussionTitle,
  description,
  badge,
  bookName,
  author,
}: DiscussionCardProps) => {
  const router = useRouter();

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
        <h2 style={{ lineHeight: "140%" }}>{discussionTitle}</h2>
        <p>{discussionId}</p>
      </ContentCardTitleContainer>

      <Stack spacing={1}>
        <TextIcon iconName={"FiBook"} text={`${bookName}`} iconPosition={"left"} />

        <TextIcon iconName={"FiFeather"} text={`${author}`} iconPosition={"left"} />
      </Stack>

      <p style={{ width: "fit-content" }}>{description}</p>

      <Stack
        direction={"row"}
        style={{ width: "100%", display: "flex", justifyContent: "space-between" }}
      >
        <Stack direction={"row"} spacing={2}>
          <TextIcon iconName={"FiThumbsUp"} text={"1"} iconPosition={"left"} />
          <TextIcon iconName={"FiMessageCircle"} text={"1"} iconPosition={"left"} />
        </Stack>

        <Button
          buttonClass={"tertiary"}
          size={"small"}
          width={"200px"}
          onClick={() => {
            router.push("/discussions/discussionId");
          }}
        >
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
            onClick={() => {
              setOpenArchiveModal(false);
            }}
          >
            ← Voltar
          </Button>

          <Button buttonClass={"secondary"}>Arquivar</Button>
        </>
      </Modal>
    </ContentCardContainer>
  );
};

export default DiscussionCard;
