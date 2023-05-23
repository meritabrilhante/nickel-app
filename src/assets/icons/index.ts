import errorIcon from "./error.svg"
import successIcon from "./success.svg"
import infoIcon from "./info.svg"

export type AlertIconType = "success" | "error" | "info"

export const icons: { [key in AlertIconType]: any } = {
  success: successIcon,
  error: errorIcon,
  info: infoIcon,
}
