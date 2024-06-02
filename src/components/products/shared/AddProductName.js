import { TextField } from "@mui/material";

export function AddProductName({ productName, setProductName }) {
  return (
    <TextField
      label="Product name"
      error={false}
      helperText={"Enter product name"}
      placeholder="Enter name product name"
      value={productName}
      onChange={(event) => setProductName(event.target.value)}
    />
  );
}
