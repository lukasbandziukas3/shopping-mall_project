import { TextField } from "@mui/material";

export function AddProductName({ productName, setProductName }) {
  const onChanged = (event) => {
    setProductName(event.target.value);
  };

  return (
    <TextField
      label="Product name"
      error={productName.length === 0}
      helperText={
        productName.length === 0
          ? "Name could not be empty"
          : "Enter product's name"
      }
      placeholder="Enter name product name"
      value={productName}
      onChange={onChanged}
    />
  );
}
