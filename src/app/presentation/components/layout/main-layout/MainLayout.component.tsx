import { Box, BoxProps, Stack, styled } from '@mui/material';
import  Footer  from '@/app/presentation/components/layout/footer/Footer.component';
import  Header  from '@/app/presentation/components/layout/header/Header.component';
import Head from 'next/head';

/**
 * Interface that defines the properties for the HeaderContainer component
 * @interface
 * @extends BoxProps
 * @prop {string} height
 */

interface MainLayoutContainerProps extends BoxProps {
  width: string
}

const MainLayoutContainer = styled(Box)(({ width }: MainLayoutContainerProps) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexDirection: 'column',
  height: '100vh',
}));

/**
 * Interface that defines the properties for the Header component
 * @interface
 * @prop {React.ReactNode} children
 * @prop {string} height
 */

interface MainLayoutProps {
  children: React.ReactNode;
  width: string
}

/**
 * Component that displays the layout for the modal Header
 * @function
 * @name Header
 * @param {HeaderProps} props
 */

const MainLayout = ({ children, width }: MainLayoutProps) => {
  return (
    <MainLayoutContainer width={width}>
      <Head>
        <title>Nickel App | Home</title>
      </Head>

      <Header width={width}/>
        {children}
      <Footer width={'100%'}/>
    </MainLayoutContainer>
  );
};

export default MainLayout;
