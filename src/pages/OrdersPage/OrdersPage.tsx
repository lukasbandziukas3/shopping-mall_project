import {ReactElement, ReactNode, useEffect} from "react";
import { OrdersTable } from "../../components/orders/OrdersTable";
import { fetchOrders } from "../../components/orders/redux/thunk";
import {CustomProgress} from "../../components/shared/CustomProgress";
import {Box} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooksTS";

export default function OrdersPage():ReactElement {
  const status = useAppSelector((state) => state.orders.status);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchOrders());
    }
  }, [status, dispatch]);

  let content: ReactNode
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
