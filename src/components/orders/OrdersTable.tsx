import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import {useAppSelector} from "../../hooks/reduxHooksTS";

export const OrdersTable = () => {
  const orders = useAppSelector((state) => state.orders.orders);

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={4}>
              Orders List
            </TableCell>
          </TableRow>
          <TableRow sx={{ display: "flex" }}>
            <TableCell sx={{ flex: 1 }}>Customer</TableCell>
            <TableCell sx={{ flex: 1 }}>Purchase date </TableCell>
            <TableCell sx={{ flex: 1 }}>Total price</TableCell>
            <TableCell sx={{ flex: 2 }}>Products</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order._id} sx={{ display: "flex" }}>
              <TableCell sx={{ flex: 1 }}>{order.user?.nickName}</TableCell>
              <TableCell sx={{ flex: 1 }}>
                {order.orderDate.toLocaleString()}
              </TableCell>
              <TableCell sx={{ flex: 1 }}>
                {order.products.reduce((accumulatorPrice, currentProduct) => {
                  return (
                    accumulatorPrice +
                    currentProduct.price * currentProduct.quantity
                  );
                }, 0)}
              </TableCell>
              <TableCell sx={{ flex: 2 }}>
                {order.products.reduce(
                  (accumulatorProductName, currentProduct) => {
                    return accumulatorProductName + currentProduct.name + " ";
                  },
                  ""
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
