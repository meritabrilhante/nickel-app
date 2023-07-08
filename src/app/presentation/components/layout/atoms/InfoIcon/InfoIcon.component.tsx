import Image from "next/image";
import { IconType, iconSVGs } from "./svgs";

interface InfoIconProps {
  type: IconType;
  size?: number;
  alt?: string;
}

const InfoIcon = ({ type, size = 32, alt = "alt" }: InfoIconProps) => {
  return <Image src={iconSVGs[type]} width={size} alt={alt} />;
};

export default InfoIcon;
