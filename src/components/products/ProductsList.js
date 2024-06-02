import { useState, useCallback } from "react";
import { Button } from "@mui/material";

import { ProductsTable } from "./ProductsTable";
import { AddProductForm } from "./AddProductForm";
import { UpdateProductForm } from "./UpdateProductForm";

export function ProductsList() {
  const [isFormAddProductOpen, setIsFormAddProductOpen] = useState(false);
  const [isFormUpdateProductOpen, setIsFormUpdateProductOpen] = useState(false);
  const [editingProductId, setEditingProductId] = useState(null);

  const openFormUpdateProduct = useCallback((e) => {
    setEditingProductId(e.target.getAttribute("data-product-id"));
    setIsFormUpdateProductOpen(true);
  }, []);

  const closeFormUpdateProduct = () => {
    setIsFormUpdateProductOpen(false);
  };

  const openFormAddProduct = () => {
    setIsFormAddProductOpen(true);
  };

  const closeFormAddProduct = () => {
    setIsFormAddProductOpen(false);
  };

  return (
    <>
      <ProductsTable onProductUpdate={openFormUpdateProduct} />
      <Button sx={{ m: 5 }} variant="contained" onClick={openFormAddProduct}>
        Add new Product
      </Button>
      {isFormAddProductOpen && (
        <AddProductForm
          isOpen={isFormAddProductOpen}
          onClose={closeFormAddProduct}
        />
      )}
      {isFormUpdateProductOpen && (
        <UpdateProductForm
          productId={Number(editingProductId)}
          isOpen={isFormUpdateProductOpen}
          onClose={closeFormUpdateProduct}
        />
      )}
    </>
  );
}
