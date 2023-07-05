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

const Input = ({ children, label, message, placeholder }: InputProps) => {
  return (
    <InputContainer height={"40px"}>
      <Stack spacing={1}>
        <InputLabel>{label}</InputLabel>

        <InputBase
          type="text"
          placeholder={placeholder}
          endAdornment={
            <InputAdornment position="end">
              <IconButton>{children}</IconButton>
            </InputAdornment>
          }
        ></InputBase>

        <p style={{ fontSize: "0.875rem" }}>{message}</p>
      </Stack>
    </InputContainer>
  );
};

export default Input;
