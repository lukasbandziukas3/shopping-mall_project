
import { ProductForm } from "./shared/forms/ProductForm";
import { AddProductToCartForm } from "./shared/forms/AddProductToCartForm";
import {productAdded, productUpdated} from "./redux/thunk";
import {FormType} from "./ProductsList";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooksTS";
import {ProductSend} from "../../interfaces/globalTypes";

export function Form({ formType, productId, onClose }:
       { formType: FormType; productId: string | null, onClose: () => void  }) {
  const product = useAppSelector((state) =>
      state.products.products.find((product) => product._id === productId)
  );

  const dispatch = useAppDispatch();

  const onUpdateProduct = (productData: Omit<ProductSend,'_id'>) =>{
   if(!productId) {
     throw new Error("Product id must be provided");
   }
    dispatch(productUpdated( {...productData, _id:productId}));
  }

  const onSaveProduct = (productData: Omit<ProductSend,'_id'>) =>{
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
      return <AddProductToCartForm productId={productId!} onClose={onClose} />;
    case "":
      return null;
    default:
      throw new Error(`${formType} unknown` );
  }
}
