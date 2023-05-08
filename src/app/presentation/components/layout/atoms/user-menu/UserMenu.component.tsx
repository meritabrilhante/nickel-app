import Avatar from "@mui/material/Avatar"
import { Box, Button, Menu, MenuItem, Stack, styled } from "@mui/material"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"

const UserMenuContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
}))

const styles = {
  button: {
    height: "2.5rem",
    fontFamily: "var(--font-family-base)",
    padding: "0px",
    backgroundColor: "transparent",
  },
}

const UserMenu = () => {
  return (
    <UserMenuContainer>
      <Stack spacing={1} direction={"row"} alignItems={"center"}>
        <Button style={styles.button} id="user-menu">
          <Avatar>UN</Avatar>
          User Menu
          <KeyboardArrowDownIcon />
        </Button>
      </Stack>

      {/* <Menu id='user-menu' open={false}>
        <MenuItem>To do</MenuItem>
      </Menu> */}
    </UserMenuContainer>
  )
}

export default UserMenu
