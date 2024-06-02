import { TextField } from "@mui/material";

export function AddCategoryName({ categoryName, setCategoryName }) {
  const onChanged = (event) => {
    setCategoryName(event.target.value);
  };

  return (
    <TextField
      label="Category name"
      error={categoryName.length === 0}
      helperText={
        categoryName.length === 0
          ? "Category could not be empty"
          : "Enter category's name"
      }
      placeholder="Enter category"
      value={categoryName}
      onChange={onChanged}
    />
  );
}
