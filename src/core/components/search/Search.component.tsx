import { IconButton, InputAdornment, InputBase } from "@mui/material";
import { Search } from '@mui/icons-material';

const SearchComponent = () => {
  return(
  <>
    <InputBase
        type='text'
        placeholder={'Ex.: Literatura Brasileira'}
        endAdornment={
          <InputAdornment position="end">
            <IconButton>
              <Search />
            </IconButton>
          </InputAdornment>
        }
      ></InputBase>
  </>
  );
};

export default SearchComponent;
