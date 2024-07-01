import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { OrdersTable } from "../../components/orders/OrdersTable";
import { fetchOrders } from "../../components/orders/redux/thunk";

export default function OrdersPage() {
  const status = useSelector((state) => state.orders.status);
  const dispatch = useDispatch();
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchOrders());
    }
  }, [status, dispatch]);

  return <OrdersTable />;
}
