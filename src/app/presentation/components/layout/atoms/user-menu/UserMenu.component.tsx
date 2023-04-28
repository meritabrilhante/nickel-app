import Avatar from '@mui/material/Avatar';
import { Box, Button, Menu, MenuItem, Stack, styled } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const UserMenuContainer = styled(Box)(({ width }: UserMenuProps) => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: width
}));

interface UserMenuProps {
  width: string
}

const styles = {
  button: {
    height: '2.5rem',
    fontFamily: 'var(--font-family-base)',
    padding: '0px'
  },
};

const UserMenu = ({ width }: UserMenuProps) => {
  return(
    <UserMenuContainer width={width}>
      <Stack spacing={1} direction={'row'} alignItems={'center'}>
        <Button style={styles.button} id='user-menu'>
          <Avatar>UN</Avatar>
          User Menu
          <KeyboardArrowDownIcon />
        </Button>
      </Stack>

      {/* <Menu id='user-menu' open={false}>
        <MenuItem>To do</MenuItem>
      </Menu> */}
    </UserMenuContainer>
  );
};

export default UserMenu;