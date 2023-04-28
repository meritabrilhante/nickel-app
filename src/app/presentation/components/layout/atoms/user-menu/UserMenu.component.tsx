import { Box, IconButton, Stack, styled } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const UserMenuContainer = styled(Box)(({ width }: UserMenuProps) => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: width
}));

interface UserMenuProps {
  width: string
}

const UserMenu = ({ width }: UserMenuProps) => {
  return(
    <UserMenuContainer width={width}>
      <Stack spacing={1} direction={'row'} alignItems={'center'}>
        <Avatar>
          UN
        </Avatar>

        <p>User Name</p>

        <IconButton>
          <KeyboardArrowDownIcon />
        </IconButton>
      </Stack>
    </UserMenuContainer>
  );
};

export default UserMenu;