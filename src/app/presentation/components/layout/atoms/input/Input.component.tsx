import { Box, IconButton, InputAdornment, InputBase, InputLabel, styled } from '@mui/material';

const InputContainer = styled(Box)(({ height }: InputProps) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: height,
}));

interface InputProps {
  height: string
}


const Input = ({ height }: InputProps) => {
  return(
    <InputContainer height={height}>
      <InputBase
        type='text'
        placeholder={'Digite algo aqui...'}
      ></InputBase>
    </InputContainer>
  );
};

export default Input;
