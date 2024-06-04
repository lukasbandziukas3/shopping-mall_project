import { useState, useCallback } from "react";
import { Button } from "@mui/material";

import { ProductsTable } from "./ProductsTable";
import { Form } from "./Form";

export function ProductsList() {
  const [openFormName, setOpenFormName] = useState("");
  const [currentProductId, setCurrentProductId] = useState(null);

  const openFormAddProduct = () => {
    setOpenFormName("addProduct");
  };

  const openFormAddProductToCart = (e) => {
    setCurrentProductId(e.target.getAttribute("data-product-id"));
    setOpenFormName("addProductToCart");
  };

  const openFormUpdateProduct = useCallback((e) => {
    setCurrentProductId(e.target.getAttribute("data-product-id"));
    setOpenFormName("updateProduct");
  }, []);

  const closeForm = () => {
    setOpenFormName("");
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
      <Form
        formType={openFormName}
        productId={Number(currentProductId)}
        onClose={closeForm}
      />
    </>
  );
}
