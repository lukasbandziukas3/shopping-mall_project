import React, { useState } from "react";
import {Box, Button} from "@mui/material";

import { ProductsTable } from "./ProductsTable";
import { Form } from "./Form";
import {useAppSelector} from "../../hooks/reduxHooksTS";

export type FormType = "productForm" | "addProductToCart" | "";

export function ProductsList() {
  const roles = useAppSelector(state => state.auth.roles )
  const [openFormName, setOpenFormName] =
         useState< "" | FormType >("");
  const [currentProductId, setCurrentProductId] = useState<string | null>(null);

  const openFormProduct = (e:  React.MouseEvent<HTMLButtonElement>) => {
      setCurrentProductId((e.target as HTMLButtonElement).getAttribute("data-product-id"));
      setOpenFormName("productForm");
  };

  const openFormAddProductToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCurrentProductId((e.target as HTMLButtonElement).getAttribute("data-product-id"));
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
        {
             roles.includes('manager') &&
                 ( <Button sx={{ m: 5 }} variant="contained" onClick={openFormProduct}>
                      Add new Product
                  </Button>
                 )
        }
      <Form
        formType={openFormName}
        productId={currentProductId}
        onClose={closeForm}
      />
    </Box>
  );
}
