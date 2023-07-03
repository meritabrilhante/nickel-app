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
import { useRouter } from "next/router"
import React, { useEffect } from "react"

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

const MainLayout = ({ children, width }: MainLayoutProps) => {
  const router = useRouter()

  useEffect(() => {
    // Verificar se o usuário está logado
    const isLoggedIn = true // Coloque aqui a lógica para verificar se o usuário está logado

    // Se o usuário não estiver logado, redirecionar para outra página
    if (isLoggedIn) {
      router.push("/auth/signup") // Coloque aqui o caminho da página para onde deseja redirecionar
    }
  }, []) // A dependência vazia indica que o efeito será executado apenas uma vez, no momento da montagem do componente

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

      <UserInfo />

      <Footer width={"100%"} />
    </MainLayoutContainer>
  )
}

export default MainLayout
