import { Box, styled } from "@mui/material";

const KeyValueContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  color: "var(--color-light)",
  width: "100%",
  gap: "8px",
}));

interface KeyValueProps {
  textKey: React.ReactNode;
  value: React.ReactNode;
}

const KeyValue = ({ textKey, value }: KeyValueProps) => {
  return (
    <KeyValueContainer>
      {textKey}

      {value}
    </KeyValueContainer>
  );
};

export default KeyValue;
