import * as icon from "react-icons/fi";

interface IconProps {
  name: string;
}

export const Icon = ({ name }: IconProps) => {
  const IconComponent = icon[name];

  return <IconComponent />;
};

export default Icon;
