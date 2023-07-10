import { Avatar, AvatarProps } from "@mui/material";

interface AvatarComponentProps extends AvatarProps {
  width: string;
  height: string;
}

const AvatarComponent = ({ height, width }: AvatarComponentProps) => {
  return (
    <Avatar
      style={{
        borderRadius: "50%",
        boxShadow: "0 0 0 2.5px var(--color-primary-pure)",
        boxSizing: "border-box",
        width: `${width}`,
        height: `${height}`,
      }}
    >
      UN
    </Avatar>
  );
};

export default AvatarComponent;
