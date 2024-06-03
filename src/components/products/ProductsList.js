import { useState, useCallback } from "react";
import { Button } from "@mui/material";

import { ProductsTable } from "./ProductsTable";
import { AddProductForm } from "./AddProductForm";
import { UpdateProductForm } from "./UpdateProductForm";
import { AddProductToCartForm } from "./shared/AddProductToCartForm";

export function ProductsList() {
  const [isFormAddProductOpen, setIsFormAddProductOpen] = useState(false);
  const [isFormAddProductToCartOpen, setIsFormAddProductToCartOpen] =
    useState(false);
  const [isFormUpdateProductOpen, setIsFormUpdateProductOpen] = useState(false);
  const [currentProductId, setCurrentProductId] = useState(null);

  const openFormAddProduct = () => {
    setIsFormAddProductOpen(true);
  };

  const closeFormAddProduct = () => {
    setIsFormAddProductOpen(false);
  };

  const openFormAddProductToCart = (e) => {
    setCurrentProductId(e.target.getAttribute("data-product-id"));
    setIsFormAddProductToCartOpen(true);
  };

  const closeFormAddProductToCart = () => {
    setIsFormAddProductToCartOpen(false);
  };

  const openFormUpdateProduct = useCallback((e) => {
    setCurrentProductId(e.target.getAttribute("data-product-id"));
    setIsFormUpdateProductOpen(true);
  }, []);

  const closeFormUpdateProduct = () => {
    setIsFormUpdateProductOpen(false);
  };

  return (
    <>
      <ProductsTable
        onProductUpdate={openFormUpdateProduct}
        onProductBuy={openFormAddProductToCart}
      />
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
          productId={Number(currentProductId)}
          isOpen={isFormUpdateProductOpen}
          onClose={closeFormUpdateProduct}
        />
      )}
      {isFormAddProductToCartOpen && (
        <AddProductToCartForm
          productId={Number(currentProductId)}
          isOpen={isFormAddProductToCartOpen}
          onClose={closeFormAddProductToCart}
        />
      )}
    </>
  );
}
