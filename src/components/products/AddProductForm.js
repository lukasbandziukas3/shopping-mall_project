import { useState } from "react";
import { useDispatch } from "react-redux";

import { productAdded } from "./productsSlice";
import { ProductForm } from "./shared/ProductForm";
import { isAllFieldsInProductCorrect } from "./helpers/helpers";

export function AddProductForm({ isOpen, onClose }) {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [categoryID, setCategoryID] = useState("");
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
      productAdded({
        id: Math.floor(Math.random() * 1000),
        name,
        categoryID: categoryID,
        price,
        quantity,
      })
    );
    setSnackBarObject({
      msg: "Product was successfully added",
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
      formMessage="Add product"
    />
  );
}
