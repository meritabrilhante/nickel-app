import { Box, FormControl, InputLabel, MenuItem, Select, Stack, styled } from "@mui/material";

const SelectComponentContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  margin: "none",
}));

export const SelectComponent = ({ label, menuItems }) => {
  return (
    <SelectComponentContainer>
      <InputLabel>{label}</InputLabel>

      <FormControl>
        <Select labelId="demo-simple-select-label" label={label}>
          {menuItems.map((item) => (
            <MenuItem key={item.value} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </SelectComponentContainer>
  );
};

export default SelectComponent;
