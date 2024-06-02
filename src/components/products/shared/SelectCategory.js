import { useSelector } from "react-redux";
import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  FormHelperText,
} from "@mui/material";

export function SelectCategory({ productCategory, setProductCategory }) {
  const catagories = useSelector((state) => state.categories.categories);
  return (
    <FormControl>
      <InputLabel htmlFor="my-select">categories</InputLabel>
      <Select
        autoWidth={true}
        label="My Select"
        value={productCategory}
        onChange={(event) => setProductCategory(event.target.value)}
      >
        {catagories.map((category) => (
          <MenuItem key={category.id} value={category.id}>
            {category.name}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>Select category of product</FormHelperText>
    </FormControl>
  );
}
