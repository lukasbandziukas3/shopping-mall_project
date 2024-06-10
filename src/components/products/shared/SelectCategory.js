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
      <InputLabel
        sx={{
          color: !productCategory ? "error.main" : "grey",
        }}
        id="category-select"
      >
        categories
      </InputLabel>
      <Select
        autoWidth={true}
        label="Category select"
        labelId="category-select"
        error={!productCategory}
        value={productCategory}
        onChange={(event) => setProductCategory(event.target.value)}
      >
        {catagories.map((category) => (
          <MenuItem key={category._id} value={category._id}>
            {category.name}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText error={!productCategory}>
        Select category of product
      </FormHelperText>
    </FormControl>
  );
}
