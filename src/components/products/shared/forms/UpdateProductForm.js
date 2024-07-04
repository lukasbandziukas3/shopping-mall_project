import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productUpdated } from "../../redux/thunk";
import { isAllFieldsInProductCorrect } from "../../helpers/helpers";
import {FormGeneral} from "../../../shared/generalComponets/FormGeneral";
import {TextFieldGeneral} from "../../../shared/generalComponets/TextFieldGeneral";
import {MenuItem} from "@mui/material";
import {SelectorGeneral} from "../../../shared/generalComponets/SelectorGeneral";

export function UpdateProductForm({ onClose, productId }) {
  const dispatch = useDispatch();
  const catagories = useSelector((state) => state.categories.categories);
  const product = useSelector((state) =>
    state.products.products.find((product) => product._id === productId)
  );

  const [name, setName] = useState(product.name);
  const [quantity, setQuantity] = useState(product.quantity);
  const [price, setPrice] = useState(product.price);
  const [categoryID, setCategoryID] = useState(product.category._id);

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
      productUpdated( { productId,
        productData:{
          name,
          category: categoryID,
          price,
          quantity,
      }
      })
    );

    onClose();
  };
  return (

      <FormGeneral
          onClose={onClose}
          formMessage="update"
          onSave={onSaveProduct}
          maxWidth='lg'
      >
          <TextFieldGeneral
              value = {name}
              setValue = {setName}
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
          >
              {catagories.map((category) => (
                  <MenuItem key={category._id} value={category._id}>
                      {category.name}
                  </MenuItem>
              ))}
          </SelectorGeneral>
          <TextFieldGeneral
              value = {price}
              setValue = {setPrice}
              label = "Product  price"
              errorMessage = "Product price could not be negative"
              error = {price < 0 }
              type = 'number'
          />
          <TextFieldGeneral
              value = {quantity}
              setValue = {setQuantity}
              label = "Product  quantity"
              errorMessage = "Product quantity could not be negative"
              error = {quantity < 0 }
              type = 'number'
          />
      </FormGeneral>
  );
}
