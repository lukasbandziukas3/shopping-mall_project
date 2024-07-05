import { useState } from "react";
import { useSelector } from "react-redux";
import { isAllFieldsInProductCorrect } from "../../helpers/helpers";
import {FormGeneral} from "../../../shared/generalComponets/FormGeneral";
import {TextFieldGeneral} from "../../../shared/generalComponets/TextFieldGeneral";
import {MenuItem} from "@mui/material";
import {SelectorGeneral} from "../../../shared/generalComponets/SelectorGeneral";

export function ProductForm({ onClose, product, submitProduct,formMessage }) {
  const catagories = useSelector((state) => state.categories.categories);
  const [name, setName] = useState(product?.name || '');
  const [quantity, setQuantity] = useState(product?.quantity || 0 );
  const [price, setPrice] = useState(product?.price || 0);
  const [categoryID, setCategoryID] = useState(product?.category._id || '');

  const onProductNameChange = (event) => {
        setName(event.target.value);
  }

  const onPriceChange = (event) => {
        setPrice(event.target.value);
  }

  const onQuantityChange = (event) => {
        setQuantity(event.target.value);
  }

  const onCategoryChange = (event) => {
       setCategoryID(event.target.value);
  }

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
    submitProduct ({productData: {
              name,
              category: categoryID,
              price,
              quantity,
          }
    });
    onClose();
  };
  return (
      <FormGeneral
          onClose={onClose}
          formMessage={formMessage}
          onSave={onSaveProduct}
          maxWidth='lg'
      >
          <TextFieldGeneral
              value = {name}
              onValueChange= { onProductNameChange }
              label = "Product name"
              errorMessage = "Product name could not be empty"
              error = {name.length === 0 }
          />
          <SelectorGeneral
              value={categoryID}
              setValue={setCategoryID}
              label = "Select category"
              error={!categoryID}
              errorMessage = 'Select category of product'
              onChange={onCategoryChange}
          >
              {catagories.map((category) => (
                  <MenuItem key={category._id} value={category._id}>
                      {category.name}
                  </MenuItem>
              ))}
          </SelectorGeneral>
          <TextFieldGeneral
              value = {price}
              onValueChange = {onPriceChange}
              label = "Product  price"
              errorMessage = "Product price could not be negative"
              error = {price < 0 }
              type = 'number'
          />
          <TextFieldGeneral
              value = {quantity}
              onValueChange = {onQuantityChange}
              label = "Product  quantity"
              errorMessage = "Product quantity could not be negative"
              error = {quantity < 0 }
              type = 'number'
          />
      </FormGeneral>
  );
}
