import { Box, BoxProps, Stack, Link, styled, Input, TextField, FilledInput } from '@mui/material';

interface HeaderContainerProps extends BoxProps {
  width: string
}

const FullHeaderContainer = styled(Box)(({ width }: HeaderContainerProps) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
}));

const UpHeaderContainer = styled(Box)(({ width }: UpHeaderContainerProps) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '1rem',
  height: '2rem',
  width: '100%',
  fontWeight: 'var(--font-weight-medium)',
  backgroundColor: 'var(--color-primary-pure)'
}));

const MidHeaderContainer = styled(Box)(({ width }: UpHeaderContainerProps) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingLeft: '10rem',
  paddingRight: '10rem',
  height: '5rem',
  width: '100%',
  backgroundColor: 'var(--color-secondary)'
}));
interface FullHeaderProps {
  width: string
}

interface UpHeaderContainerProps {
  width: string
}

const Header = ({ width }: FullHeaderProps) => {
  return (
    <FullHeaderContainer width={width}>
        <UpHeaderContainer width={'100%'}>
          <p> ✨ versão beta 1.0</p>
        </UpHeaderContainer>

        <MidHeaderContainer width={'100%'}>
          <Link href='' underline='none' color='inherit'>
            <h2>Nickel App</h2>
          </Link>
        </MidHeaderContainer>
    </FullHeaderContainer>
  )
}

export default Header
