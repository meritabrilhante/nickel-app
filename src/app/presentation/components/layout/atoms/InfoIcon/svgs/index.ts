import errorIcon from "./error.svg";
import successIcon from "./success.svg";
import infoIcon from "./info.svg";

export type IconType = "success" | "error" | "info";

export const iconSVGs: { [key in IconType]: any } = {
  success: successIcon,
  error: errorIcon,
  info: infoIcon,
};
