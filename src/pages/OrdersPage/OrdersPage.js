import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { OrdersTable } from "../../components/orders/OrdersTable";
import { fetchOrders } from "../../components/orders/redux/thunk";
import { CustomProgress } from "../../components/shared/CustomProgress";

export function OrdersPage() {
  const status = useSelector((state) => state.orders.status);
  const dispatch = useDispatch();
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchOrders());
    }
  }, [status, dispatch]);
  let content;

  if (status === "loading") {
    content = <CustomProgress />;
  }
  if (status === "succeeded") {
    content = <OrdersTable />;
  }

  return <>{content}</>;
}
