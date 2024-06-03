import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Dialog,
  DialogTitle,
  DialogActions,
  Button,
  Zoom,
  TextField,
} from "@mui/material";
import { addedOrderToCart } from "../../cart/cartSlice";

export function AddProductToCartForm({ isOpen, onClose, productId }) {
  const dispatch = useDispatch();

  const product = useSelector((state) =>
    state.products.products.find((product) => product.id === productId)
  );

  const [quantity, setQuantity] = useState(1);

  const onBuyProduct = () => {
    if (quantity < 1 || quantity > product.quantity) {
      return;
    }
    dispatch(
      addedOrderToCart({
        productId: product.id,
        productName: product.name,
        productQuantity: Number(quantity),
        price: product.price,
      })
    );

    onClose();
  };
  return (
    <Dialog
      maxWidth="lg"
      fullWidth={true}
      TransitionComponent={Zoom}
      open={isOpen}
    >
      <DialogTitle> Buy {product.name} </DialogTitle>
      <DialogActions>
        <TextField
          label="Product's quantity"
          error={quantity < 1 || quantity > product.quantity}
          helperText={
            quantity < 0 || quantity > product.quantity
              ? `Quantity could not be less than 1 and more than  ${product.quantity}`
              : "Enter quantity"
          }
          placeholder="Enter how many products do yuo want to buy"
          value={quantity}
          type="number"
          min={1}
          max={product.quantity}
          onChange={(event) => setQuantity(event.target.value)}
        />

        <Button variant="contained" onClick={onBuyProduct}>
          Buy {product.name}
        </Button>
        <Button color="error" variant="contained" onClick={onClose}>
          cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}
