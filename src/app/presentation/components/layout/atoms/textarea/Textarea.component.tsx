import {
  Box,
  IconButton,
  InputAdornment,
  InputBase,
  InputLabel,
  Stack,
  styled,
} from "@mui/material";

const InputContainer = styled(Box)(({ height }: InputContainerProps) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: height,
  width: "100%",
}));

interface InputContainerProps {
  height: string;
}

interface InputProps extends React.HTMLProps<HTMLButtonElement> {
  height?: string;
  children?: React.ReactNode;
  label?: string;
  message?: string;
  placeholder?: string;
  width?: string;
  state?: InputState;
}

export type InputState = "error" | "sucess" | "disabled";

const Textarea = ({ children, label, message, placeholder }: InputProps) => {
  return (
    <InputContainer height={"250px"}>
      <Stack spacing={1}>
        <InputLabel>{label}</InputLabel>

        <textarea
          placeholder={placeholder}
          style={{
            width: "100%",
            borderRadius: "8px",
            backgroundColor: "var(--color-secondary)",
            fontFamily: "var(--font-family-base)",
            height: "12rem",
            color: "var(--color-light)",
            padding: "1rem",
            border: "none",
            resize: "none",
          }}
        ></textarea>

        <p style={{ fontSize: "0.875rem" }}>{message}</p>
      </Stack>
    </InputContainer>
  );
};

export default Textarea;
