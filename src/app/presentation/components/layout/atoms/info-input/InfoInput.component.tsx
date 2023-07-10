import { IconButton } from "@mui/material";
import { Icon } from "../icon";
import { Input } from "../input";
import { useState } from "react";

interface InfoInputProps {
  text: string;
  label: string;
}

const InfoInput = ({ text, label }: InfoInputProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Input label={label} placeholder={text} disabled>
      <IconButton onClick={handleCopy}>
        <Icon name={"FiLink"} style={{ color: "var(--color-light)" }} />
      </IconButton>
    </Input>
  );
};

export default InfoInput;
