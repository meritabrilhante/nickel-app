import styled from "@emotion/styled"
import { Box, Stack } from "@mui/material"

const TitleHeaderContainer = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexDirection: "column",
}))

const TitleHeaderMainContainer = styled(Box)(({ description }: TitleHeaderComponentProps) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexDirection: "row",
  description: "description",
}))

export interface TitleHeaderComponentProps {
  button?: React.ReactNode
  leftIcon?: React.ReactNode
  title: string
  description?: string
}

const TitleHeader = ({ title, button, description }: TitleHeaderComponentProps) => {
  return (
    <TitleHeaderContainer>
      <TitleHeaderMainContainer title={"Title"}>
        {title}
        {button}
      </TitleHeaderMainContainer>
      {description}
    </TitleHeaderContainer>
  )
}

export default TitleHeader
