import { Alert, AlertProps, AlertTitle, Box, Stack, styled } from "@mui/material"

import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import ErrorIcon from "@mui/icons-material/Error"
import CancelIcon from "@mui/icons-material/Cancel"

export type AlertType = "success" | "error" | "info"

export interface AlertComponentProps extends AlertProps {
  type: AlertType
  title?: string
  description?: string
}

const AlertStyled = styled(Alert)(({ type }: AlertComponentProps) => ({
  backgroundColor: "var(--color-tertiary)",
  color: "var(--color-light)",
  fontFamily: "var(--font-family-base)",
  borderLeft: `0.4rem solid var(--color-${type}-pure)`,
  maxWidth: "25%",
  fontSize: "14px",
  lineHeight: "160%",
}))

const alertIcon = {
  success: <CheckCircleIcon style={{ color: "var(--color-success-pure)" }} />,
  error: <CancelIcon style={{ color: "var(--color-error-pure)" }} />,
  info: <ErrorIcon style={{ color: "var(--color-info-pure)" }} />,
}

const AlertComponent = ({ type, title, description }: AlertComponentProps) => {
  return (
    <AlertStyled icon={false} type={type}>
      <Box style={{ display: "flex" }}>
        <Stack spacing={1} direction={"row"}>
          {alertIcon[type]}
          <AlertTitle
            style={{
              fontWeight: "var(--font-weight-bold)",
              color: `var(--color-${type}-pure)`,
              letterSpacing: "0.5px",
              fontSize: "1.125rem",
            }}
          >
            {title}
          </AlertTitle>
        </Stack>
      </Box>
      {description}
    </AlertStyled>
  )
}

export default AlertComponent
