import {ChangeEvent, useState} from "react";
import { isAllFieldsInProductCorrect } from "../../helpers/helpers";
import {FormGeneral} from "../../../shared/generalComponets/FormGeneral";
import {TextFieldGeneral} from "../../../shared/generalComponets/TextFieldGeneral";
import {MenuItem, SelectChangeEvent} from "@mui/material";
import {SelectorGeneral} from "../../../shared/generalComponets/SelectorGeneral";
import {useAppSelector} from "../../../../hooks/reduxHooksTS";
import {ProductGet, ProductSend} from "../../../../interfaces/globalTypes";

export function ProductForm({ onClose, product, submitProduct,formMessage }:
  { onClose: () => void, product: ProductGet | undefined, submitProduct: (product: Omit <ProductSend,'_id'>)  => void, formMessage: string }) {
  const categories = useAppSelector((state) => state.categories.categories);
  const [name, setName] = useState(product?.name || '');
  const [quantity, setQuantity] = useState(product?.quantity || 0 );
  const [price, setPrice] = useState(product?.price || 0);
  const [categoryID, setCategoryID] = useState(product?.category._id || '');

  const onProductNameChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setName(event.target.value);
  }

  const onPriceChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setPrice(Number(event.target.value));
  }

  const onQuantityChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setQuantity(Number(event.target.value));
  }

  const onCategoryChange = (event:SelectChangeEvent<string>) => {
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
    submitProduct ( {
              name,
              category: categoryID,
              price,
              quantity,
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
              label = "Select category"
              error={!categoryID}
              errorMessage = 'Select category of product'
              onChange={onCategoryChange}
          >
              {categories.map((category) => (
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
