import { TextField } from "@mui/material";

export function AddProductPrice({ productPrice, setProductPrice }) {
  return (
    <TextField
      label="Product price $"
      error={productPrice < 0}
      helperText={
        productPrice < 0
          ? "Price could not be negative"
          : "Enter product's price"
      }
      placeholder="Enter price of product "
      value={productPrice}
      type="number"
      onChange={(event) => setProductPrice(event.target.value)}
    />
  );
}
