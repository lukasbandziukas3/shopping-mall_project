
import { CartList } from "../../components/cart/CartList";
import { CustomProgress } from "../../components/shared/CustomProgress";
import {useAppSelector} from "../../hooks/reduxHooksTS";
import React, {ReactElement} from "react";

export default function CartPage(): ReactElement {
  const status = useAppSelector((state) => state.orders.status);
  let content: React.ReactNode;
  if (status === "loading") {
    content = <CustomProgress />;
  }
  else  {
    content = <CartList />;
  }
  return <>{content}</>;
}
