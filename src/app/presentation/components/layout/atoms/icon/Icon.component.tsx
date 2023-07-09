import { IconProps } from "@mui/material";
import * as icon from "react-icons/fi";

interface IconComponentProps extends IconProps {
  name: string;
}

export const Icon = ({ name }: IconComponentProps) => {
  const IconComponent = icon[name];

  return <IconComponent />;
};

export default Icon;
