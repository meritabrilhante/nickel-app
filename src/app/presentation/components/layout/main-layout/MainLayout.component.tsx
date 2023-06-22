import { Box, BoxProps, styled } from "@mui/material"
import Footer from "@/app/presentation/components/layout/footer/Footer.component"
import Header from "@/app/presentation/components/layout/header/Header.component"
import Head from "next/head"
import Button from "../atoms/button/Button.component"
import { TitleHeader } from "../atoms/title-header"
import { CircleNotificationsTwoTone, Close, CloseOutlined } from "@mui/icons-material"
import { useCurrentUser } from "src/users/hooks/useCurrentUser"
import { useMutation } from "@blitzjs/rpc"
import logout from "src/auth/mutations/logout"
import Link from "next/link"
import { Routes, BlitzPage } from "@blitzjs/next"

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
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexDirection: "column",
  height: "100vh",
}))

/**
 * Interface that defines the properties for the Header component
 * @interface
 * @prop {React.ReactNode} children
 * @prop {string} height
 */

interface MainLayoutProps {
  children: React.ReactNode
  width: string
}

/**
 * Component that displays the layout for the modal Header
 * @function
 * @name Header
 * @param {HeaderProps} props
 */

const UserInfo = () => {
  const currentUser = useCurrentUser()
  const [logoutMutation] = useMutation(logout)

  if (!currentUser) {
    return (
      <>
        <button
          onClick={async () => {
            await logoutMutation()
          }}
        >
          Logout
        </button>
        <div>
          User id: <code>{currentUser.id}</code>
          <br />
          User name: <code>{currentUser.first_name}</code>
        </div>
      </>
    )
  } else {
    return (
      <>
        <Link href={Routes.SignupPage()}>
          <strong>Sign Up</strong>
        </Link>
        <Link href={Routes.LoginPage()}>
          <strong>Login</strong>
        </Link>
      </>
    )
  }
}

const MainLayout = ({ children, width }: MainLayoutProps) => {
  return (
    <MainLayoutContainer width={width}>
      <Head>
        <title>Nickel App | Home</title>
      </Head>

      <Header width={width} />
      {children}

      <TitleHeader
        title={"Title"}
        button={
          <Button buttonClass={"secondary"} size={"small"}>
            <CloseOutlined />
          </Button>
        }
        description="Lorem ipsum is a simply dumb text"
      />

      <div>
        <p>Teste</p>
      </div>

      <Footer width={"100%"} />
    </MainLayoutContainer>
  )
}

export default MainLayout
