import Avatar from "@mui/material/Avatar";
import { Box, Button, Stack, styled } from "@mui/material";
import MenuComponent from "../menu/Menu.Component";
import React from "react";
import { useRouter } from "next/router";

const UserMenuContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
}));

const styles = {
  button: {
    height: "2.5rem",
    fontFamily: "var(--font-family-base)",
    padding: "0px",
    backgroundColor: "transparent",
  },
};

const UserMenu = () => {
  const router = useRouter();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClickModal = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const options = [
    { label: "Perfil", onItemClick: () => router.push("/users/userId") },
    { label: "Sair", onItemClick: () => router.push("/auth/login") },
  ];

  return (
    <UserMenuContainer>
      <Stack spacing={1} direction={"row"} alignItems={"center"}>
        <Button onClick={handleClickModal} style={styles.button} id="user-menu">
          <Avatar
            style={{
              borderRadius: "50%",
              boxShadow: "0 0 0 2.5px var(--color-primary-pure)",
              boxSizing: "border-box",
            }}
          >
            UN
          </Avatar>
          User Menu
        </Button>

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
      </Stack>

      {/* <Menu id='user-menu' open={false}>
        <MenuItem>To do</MenuItem>
      </Menu> */}
    </UserMenuContainer>
  );
};

export default UserMenu;
