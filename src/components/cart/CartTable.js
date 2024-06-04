import { useSelector } from "react-redux";
import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";

export const CartTable = () => {
  const productsInCart = useSelector((state) => state.cart.orders);

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={4}>
              Your purchase
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Quantity </TableCell>
            <TableCell>PriceForOne</TableCell>
            <TableCell>TotalPrice</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {productsInCart.map((product) => (
            <TableRow key={product.productId}>
              <TableCell>{product.productName}</TableCell>
              <TableCell>{product.productQuantity}</TableCell>
              <TableCell>{product.price}</TableCell>
              <TableCell>{product.productQuantity * product.price}</TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell colSpan={2} rowSpan={2} />
            <TableCell>Total amount</TableCell>
            <TableCell>
              {productsInCart.reduce(
                (acamulator, currentOrder) =>
                  acamulator +
                  currentOrder.price * currentOrder.productQuantity,
                0
              )}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
