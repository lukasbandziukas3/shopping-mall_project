import {
  Dialog,
  DialogTitle,
  DialogActions,
  Button,
  Zoom,
} from "@mui/material";

import { SelectCategory } from "../SelectCategory";
import { AddProductName } from "../AddProductName";
import { AddProductPrice } from "../AddProductPrice";
import { AddProductQuantity } from "../AddProductQuantity";

export function ProductForm({
  onClose,
  onSaveProduct,
  name,
  setName,
  quantity,
  setQuantity,
  price,
  setPrice,
  category,
  setCategory,
  formMessage,
}) {
  return (
    <Dialog
      maxWidth="lg"
      fullWidth={true}
      TransitionComponent={Zoom}
      open={true}
    >
      <DialogTitle>{formMessage}</DialogTitle>
      <DialogActions>
        <AddProductName productName={name} setProductName={setName} />
        <SelectCategory
          productCategory={category}
          setProductCategory={setCategory}
        />
        <AddProductPrice productPrice={price} setProductPrice={setPrice} />
        <AddProductQuantity
          productQuantity={quantity}
          setProductQuantity={setQuantity}
        />
        <Button variant="contained" onClick={onSaveProduct}>
          {formMessage}
        </Button>
        <Button color="error" variant="contained" onClick={onClose}>
          cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}
