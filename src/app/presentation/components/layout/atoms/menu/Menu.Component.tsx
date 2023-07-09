import { Menu, MenuItem, MenuProps, styled } from "@mui/material";

interface MenuComponentProps extends MenuProps {
  options: Option[];
  onItemClick: (option) => void;
}

interface Option {
  label: React.ReactNode;
}

export const MenuContainer = styled(Menu)(() => ({
  "& .MuiList-root": {
    backgroundColor: "var(--color-tertiary)",
    padding: "16px",
  },
}));

export const MenuItemContainer = styled(MenuItem)(() => ({
  display: "flex",
  background: "var(--color-tertiary)",
  color: "var(--color-light)",
  padding: "16px",
  borderRadius: "8px",
  "&:hover": {
    backgroundColor: "var(--color-secondary)",
  },
}));

const MenuComponent = ({ options, onItemClick, ...menuProps }: MenuComponentProps) => {
  return (
    <MenuContainer {...menuProps}>
      {options.map((option, index) => (
        <MenuItemContainer key={index} onClick={() => onItemClick(option)}>
          {option.label}
        </MenuItemContainer>
      ))}
    </MenuContainer>
  );
};

export default MenuComponent;
