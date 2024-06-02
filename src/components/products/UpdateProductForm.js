import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { productUpdated } from "./productsSlice";
import { ProductForm } from "./shared/ProductForm";
import { isAllFieldsInProductCorrect } from "./helpers/helpers";

export function UpdateProductForm({ isOpen, onClose, productId }) {
  const dispatch = useDispatch();

  const product = useSelector((state) =>
    state.products.products.find((product) => product.id === Number(productId))
  );

  const [name, setName] = useState(product.name);
  const [quantity, setQuantity] = useState(product.quantity);
  const [price, setPrice] = useState(product.price);
  const [categoryID, setCategoryID] = useState(product.categoryID);
  const [snackbarObject, setSnackBarObject] = useState({});
  const [isOpenSnackbar, setIsOpenSnackbar] = useState(false);

  const onSaveProduct = () => {
    const errMsg = isAllFieldsInProductCorrect({
      name,
      quantity,
      price,
      categoryID,
    });
    if (errMsg) {
      setIsOpenSnackbar(true);
      setSnackBarObject({ msg: errMsg, reason: "error" });
      return;
    }
    dispatch(
      productUpdated({
        id: productId,
        name,
        categoryID: categoryID,
        price,
        quantity,
      })
    );
    setSnackBarObject({
      msg: "Product was successfully updated",
      reason: "success",
    });

    onClose();
  };
  return (
    <ProductForm
      isOpen={isOpen}
      onClose={onClose}
      onSaveProduct={onSaveProduct}
      name={name}
      setName={setName}
      quantity={quantity}
      setQuantity={setQuantity}
      price={price}
      setPrice={setPrice}
      category={categoryID}
      setCategory={setCategoryID}
      formMessage="Edit product"
    />
  );
}
