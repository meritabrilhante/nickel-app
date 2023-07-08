import { Box, Modal, ModalProps, Stack } from "@mui/material";
import { Button } from "../button";
import { InfoIcon } from "../InfoIcon";
import { useRouter } from "next/router";

export type ModalIcon = "success" | "error" | "info";

export interface CustomModalProps extends ModalProps {
  icon: ModalIcon;
  title: string;
  message: string;
  path: string;
}

const ModalIconPath = {
  success: <InfoIcon type={"success"} />,
  error: <InfoIcon type={"error"} />,
  info: <InfoIcon type={"info"} />,
};

const ModalComponent = ({ open, onClose, icon, title, message, path }: CustomModalProps) => {
  const router = useRouter();

  const style = {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "20%",
    height: "25%",
    borderRadius: "16px",
    bgcolor: "var(--color-tertiary)",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Stack spacing={3}>
          {ModalIconPath[icon]}

          <h3>{title}</h3>
          <p>{message}</p>
        </Stack>

        <Button
          buttonClass={"secondary"}
          onClick={() => {
            router.push(`/${path}`);
          }}
        >
          Ok →
        </Button>
      </Box>
    </Modal>
  );
};

export default ModalComponent;