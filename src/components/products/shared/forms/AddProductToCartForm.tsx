import {ChangeEvent, useState} from "react";
import { addedOrderToCart } from "../../../cart/redux/thunks";
import {FormGeneral} from "../../../shared/generalComponets/FormGeneral";
import {TextFieldGeneral} from "../../../shared/generalComponets/TextFieldGeneral";
import {useAppDispatch, useAppSelector} from "../../../../hooks/reduxHooksTS";

export function AddProductToCartForm({ onClose, productId }:
                                         {
                                          onClose: () => void, productId: string;
                                         }) {
  const dispatch = useAppDispatch();
  const product = useAppSelector((state) =>
    state.products.products.find((product) => product._id === productId)
  );

  const [quantity, setQuantity] = useState<number>(1);

  const onChangeQuantity = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
      setQuantity(Number(e.target.value));
  }

  const onBuyProduct = () => {
    if (quantity < 1 || quantity > product!.quantity) {
      return;
    }
    dispatch(
      addedOrderToCart({
        _id: product!._id,
        name: product!.name,
        quantity: Number(quantity),
        price: product!.price,
      })
    );
    onClose();
  };
  const errorMessage = `Product quantity could not be less than 1 and more than ${product!.quantity }`
    const formMessage = `Buy ${product!.name}`;
  return (
      <FormGeneral
          onClose={onClose}
          formMessage= {formMessage}
          onSave={onBuyProduct}
          maxWidth='sm'
      >
          <TextFieldGeneral
              value = {quantity}
              label = "Product  quantity"
              errorMessage = {errorMessage}
              error = { quantity < 1 || quantity > product!.quantity }
              type = 'number'
              onValueChange={onChangeQuantity}
          />
      </FormGeneral>
  );
}
