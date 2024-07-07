import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addedOrderToCart } from "../../../cart/redux/thunks";
import {FormGeneral} from "../../../shared/generalComponets/FormGeneral";
import {TextFieldGeneral} from "../../../shared/generalComponets/TextFieldGeneral";

export function AddProductToCartForm({ onClose, productId }) {
  const dispatch = useDispatch();

  const product = useSelector((state) =>
    state.products.products.find((product) => product._id === productId)
  );

  const [quantity, setQuantity] = useState(1);

  const onChangeQuantity = (e)=>{
      setQuantity(e.target.value);
  }

  const onBuyProduct = () => {
    if (quantity < 1 || quantity > product.quantity) {
      return;
    }
    dispatch(
      addedOrderToCart({
        productId: product._id,
        productName: product.name,
        productQuantity: Number(quantity),
        price: product.price,
      })
    );
    onClose();
  };
  const errorMessage = `Product quantity could not be less than 1 and more than ${product.quantity }`
    const formMessage = `Buy ${product.name}`;
  return (
      <FormGeneral
          onClose={onClose}
          formMessage= {formMessage}
          onSave={onBuyProduct}
          maxWidth='sm'
      >
          <TextFieldGeneral
              value = {quantity}
              setValue = {setQuantity}
              label = "Product  quantity"
              errorMessage = {errorMessage}
              error = { quantity < 1 || quantity > product.quantity }
              type = 'number'
              onValueChange={onChangeQuantity}
          />
      </FormGeneral>
  );
}
