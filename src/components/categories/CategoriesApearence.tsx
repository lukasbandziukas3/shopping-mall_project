
import React, {memo} from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import {useAppSelector} from "../../hooks/reduxHooksTS";

export const CategoriesApearence = memo(({ onUpdate }:{onUpdate: (e: React.MouseEvent<HTMLButtonElement>)=> void }) => {
  const categories = useAppSelector((state) => state.categories.categories);
  const roles = useAppSelector(state => state.auth.roles )
  return (
    <List>
      {categories.map((category) => (
        <ListItem key={category._id}>
          <ListItemText> {category.name} </ListItemText>
          { roles.includes('manager') && (
            <Button
              variant="contained"
              data-category-id={category._id}
              onClick={onUpdate}
            >
              update
            </Button>
            )
          }
        </ListItem>
      ))}
    </List>
  );
});
