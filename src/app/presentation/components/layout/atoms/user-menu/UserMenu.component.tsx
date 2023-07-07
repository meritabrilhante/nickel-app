import Avatar from "@mui/material/Avatar";
import { Box, Button, Menu, MenuItem, Stack, styled } from "@mui/material";

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
  return (
    <UserMenuContainer>
      <Stack spacing={1} direction={"row"} alignItems={"center"}>
        <Button style={styles.button} id="user-menu">
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
      </Stack>

      {/* <Menu id='user-menu' open={false}>
        <MenuItem>To do</MenuItem>
      </Menu> */}
    </UserMenuContainer>
  );
};

export default UserMenu;
