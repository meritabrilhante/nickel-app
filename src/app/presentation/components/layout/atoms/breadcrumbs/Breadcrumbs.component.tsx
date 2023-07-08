import { Breadcrumbs, Link, Typography } from "@mui/material";

export const BreadcrumbsComponent = ({ path }) => {
  return (
    <Breadcrumbs aria-label="breadcrumb" separator={"→"} color={"var(--color-light)"}>
      {path.map((item, index) => {
        if (item.link) {
          return (
            <Link key={index} href={item.link} color="var(--color-light)" underline={"none"}>
              {item.label}
            </Link>
          );
        }
        if (index === path.length - 1) {
          return (
            <Typography key={index} color="var(--color-light)">
              {item.label}
            </Typography>
          );
        }
        return (
          <Link key={index} href={item.link} color="var(--color-light)">
            {item.label}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
};

export default BreadcrumbsComponent;
