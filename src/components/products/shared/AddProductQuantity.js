import { TextField } from "@mui/material";

export function AddProductQuantity({ productQuantity, setProductQuantity }) {
  return (
    <TextField
      label="Product's quantity"
      error={productQuantity < 0}
      helperText={
        productQuantity < 0
          ? "Quantity could not be negative"
          : "Enter product's quantity"
      }
      placeholder="Enter quantity of product"
      value={productQuantity}
      type="number"
      onChange={(event) => setProductQuantity(event.target.value)}
    />
  );
}
