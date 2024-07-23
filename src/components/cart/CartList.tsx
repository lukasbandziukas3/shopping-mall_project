import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";

import { cancelOrderFromCart, makePurchase } from "./redux/thunks";
import { CartTable } from "./CartTable";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooksTS";

export function CartList() {
  const productsInCartLength = useAppSelector((state) => state.cart.orders.length);
  const dispatch = useAppDispatch();

  const onBuy = () => {
    dispatch(makePurchase());
  };

  const onCancel = () => {
    dispatch(cancelOrderFromCart());
  };
  return (
    <>
      {productsInCartLength ? (
        <>
          <CartTable />
          <Button sx={{ m: 5 }} variant="contained" onClick={onCancel}>
            Cancel
          </Button>
          <Button sx={{ m: 5 }} variant="contained" onClick={onBuy}>
            Buy
          </Button>
        </>
      ) : (
        <Typography variant="h2">Your cart is empty</Typography>
      )}
    </>
  );
}
