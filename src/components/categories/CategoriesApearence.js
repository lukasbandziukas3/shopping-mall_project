import { useSelector } from "react-redux";
import {memo} from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";

export const CategoriesApearence = memo(({ onUpdate }) => {
  const catagories = useSelector((state) => state.categories.categories);
  const roles = useSelector(state => state.auth.roles )
  return (
    <List>
      {catagories.map((category) => (
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
