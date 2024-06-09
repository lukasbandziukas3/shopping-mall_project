import { useState } from "react";
import { useDispatch } from "react-redux";

import { productAdded } from "../../redux/thunk";
import { ProductForm } from "./ProductForm";
import { isAllFieldsInProductCorrect } from "../../helpers/helpers";

export function AddProductForm({ onClose }) {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [categoryID, setCategoryID] = useState("");

  const onSaveProduct = () => {
    const errMsg = isAllFieldsInProductCorrect({
      name,
      quantity,
      price,
      categoryID,
    });
    if (errMsg) {
      return;
    }
    dispatch(
      productAdded({
        name,
        category: categoryID,
        price,
        quantity,
      })
    );
    onClose();
  };
  return (
    <ProductForm
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
