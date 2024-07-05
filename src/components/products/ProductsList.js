import { useState } from "react";
import {Box, Button} from "@mui/material";

import { ProductsTable } from "./ProductsTable";
import { Form } from "./Form";

export function ProductsList() {

  const [openFormName, setOpenFormName] = useState("");
  const [currentProductId, setCurrentProductId] = useState(null);

  const openFormProduct = (e) => {
      setCurrentProductId(e.target.getAttribute("data-product-id"));
      setOpenFormName("productForm");
  };

  const openFormAddProductToCart = (e) => {
    setCurrentProductId(e.target.getAttribute("data-product-id"));
    setOpenFormName("addProductToCart");
  };

  const closeForm = () => {
      setCurrentProductId(null);
      setOpenFormName("");
  };

  return (
    <Box>
      <ProductsTable
        onProductUpdate={openFormProduct}
        onProductBuy={openFormAddProductToCart}
      />
      <Button sx={{ m: 5 }} variant="contained" onClick={openFormProduct}>
        Add new Product
      </Button>
      <Form
        formType={openFormName}
        productId={currentProductId}
        onClose={closeForm}
      />
    </Box>
  );
}
