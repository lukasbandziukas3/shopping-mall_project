import { memo } from "react";
import { useSelector } from "react-redux";
import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
} from "@mui/material";

export const ProductsTable = memo(({ onProductUpdate, onProductBuy }) => {
  const products = useSelector((state) => state.products.products);
  const categories = useSelector((state) => state.categories.categories);

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={4}>
              Product List
            </TableCell>
          </TableRow>
          <TableRow sx={{ display: "flex" }}>
            <TableCell sx={{ flex: 1 }}>Name</TableCell>
            <TableCell sx={{ flex: 1 }}>Quantity </TableCell>
            <TableCell sx={{ flex: 1 }}>Price</TableCell>
            <TableCell sx={{ flex: 1 }}>Category</TableCell>
            <TableCell sx={{ flex: 2 }} align="center">
              Edit
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id} sx={{ display: "flex" }}>
              <TableCell sx={{ flex: 1 }}>{product.name}</TableCell>
              <TableCell sx={{ flex: 1 }}>{product.quantity}</TableCell>
              <TableCell sx={{ flex: 1 }}>{product.price}</TableCell>
              <TableCell sx={{ flex: 1 }}>
                {
                  categories.find(
                    (category) => category.id === product.categoryID
                  ).name
                }
              </TableCell>
              <TableCell sx={{ flex: 2 }} align="center">
                <Button
                  onClick={onProductUpdate}
                  data-product-id={product.id}
                  variant="contained"
                >
                  edit
                </Button>
                <Button
                  sx={{ ml: 1 }}
                  data-product-id={product.id}
                  variant="contained"
                  onClick={onProductBuy}
                  disabled={product.quantity === 0}
                >
                  Add to cart
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
});
