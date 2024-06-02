import { useState } from "react";
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

import { AddProductForm } from "./AddProductForm";
import { UpdateProductForm } from "./UpdateProductForm";

export function ProductsTable() {
  const [isFormAddProductOpen, setIsFormAddProductOpen] = useState(false);
  const [isFormUpdateProductOpen, setIsFormUpdateProductOpen] = useState(false);
  const [editingProductId, setEditingProductId] = useState(null);

  const products = useSelector((state) => state.products.products);
  const categories = useSelector((state) => state.categories.categories);

  const openFormAddProduct = () => {
    setIsFormAddProductOpen(true);
  };

  const openFormUpdatetProduct = (e) => {
    setEditingProductId(e.target.getAttribute("data-product-id"));
    setIsFormUpdateProductOpen(true);
  };

  const closeFormUpdateProduct = () => {
    setIsFormUpdateProductOpen(false);
  };

  const closeFormAddProduct = () => {
    setIsFormAddProductOpen(false);
  };

  return (
    <div>
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
                <TableCell sx={{ flex: 1 }}>{product.price}</TableCell>
                <TableCell sx={{ flex: 1 }}>{product.quantity}</TableCell>
                <TableCell sx={{ flex: 1 }}>
                  {
                    categories.find(
                      (category) => category.id === product.categoryID
                    ).name
                  }
                </TableCell>
                <TableCell sx={{ flex: 2 }} align="center">
                  <Button
                    onClick={openFormUpdatetProduct}
                    data-product-id={product.id}
                    variant="contained"
                  >
                    {" "}
                    edit
                  </Button>
                  <Button
                    sx={{ ml: 1 }}
                    data-product-id={product.id}
                    variant="contained"
                  >
                    Buy
                  </Button>

                  {""}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button sx={{ m: 5 }} variant="contained" onClick={openFormAddProduct}>
        Add new Product
      </Button>
      {isFormUpdateProductOpen && (
        <UpdateProductForm
          productId={Number(editingProductId)}
          isOpen={isFormUpdateProductOpen}
          onClose={closeFormUpdateProduct}
        />
      )}
      {isFormAddProductOpen && (
        <AddProductForm
          isOpen={isFormAddProductOpen}
          onClose={closeFormAddProduct}
        />
      )}
    </div>
  );
}
