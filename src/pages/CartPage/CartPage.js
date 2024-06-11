import { useSelector } from "react-redux";

import { CartList } from "../../components/cart/CartList";
import { CustomProgress } from "../../components/shared/CustomProgress";

export function CartPage() {
  const status = useSelector((state) => state.orders.status);
  let content;
  if (status === "loading") {
    content = <CustomProgress />;
  }
  if (status === "succeeded" || status === "idle") {
    content = <CartList />;
  }
  return <>{content}</>;
}
