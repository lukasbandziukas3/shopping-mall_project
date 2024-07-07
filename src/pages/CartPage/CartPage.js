import { useSelector } from "react-redux";

import { CartList } from "../../components/cart/CartList";
import { CustomProgress } from "../../components/shared/CustomProgress";

export default function CartPage() {
  const status = useSelector((state) => state.orders.status);
  let content;
  if (status === "loading") {
    content = <CustomProgress />;
  }
  else  {
    content = <CartList />;
  }
  return <>{content}</>;
}
