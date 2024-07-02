import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { OrdersTable } from "../../components/orders/OrdersTable";
import { fetchOrders } from "../../components/orders/redux/thunk";
import {CustomProgress} from "../../components/shared/CustomProgress";
import {Box} from "@mui/material";

export default function OrdersPage() {
  const status = useSelector((state) => state.orders.status);
  const dispatch = useDispatch();
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchOrders());
    }
  }, [status, dispatch]);

  let content
  if (status === "loading" || status === "idle") {
    content = <CustomProgress/>
  }
  else{
    content = <OrdersTable />
  }

  return  ( <Box>
              {content}
            </Box>
  );
}
