
import { ProductForm } from "./shared/forms/ProductForm";
import { AddProductToCartForm } from "./shared/forms/AddProductToCartForm";
import {useDispatch, useSelector} from "react-redux";
import {productAdded, productUpdated} from "./redux/thunk";

export function Form({ formType, productId, onClose }) {
  const product = useSelector((state) =>
      state.products.products.find((product) => product._id === productId)
  );

  const dispatch = useDispatch();

  const onUpdateProduct = ({productData}) =>{
    dispatch(productUpdated( {_id: productId, ...productData}));
  }

  const onSaveProduct = ({productData}) =>{
    dispatch( productAdded(productData) );
  }
  switch (formType) {
    case "productForm":
      return <ProductForm
                product={product}
                onClose={onClose}
                submitProduct = { productId ? onUpdateProduct : onSaveProduct }
                formMessage = {productId ? "edit" : "add" }
      />
    case "addProductToCart":
      return <AddProductToCartForm productId={productId} onClose={onClose} />;
    default:
      return null;
  }
}
