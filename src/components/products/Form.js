import { AddProductForm } from "./shared/forms/AddProductForm";
import { UpdateProductForm } from "./shared/forms/UpdateProductForm";
import { AddProductToCartForm } from "./shared/forms/AddProductToCartForm";

export function Form({ formType, productId, onClose }) {
  switch (formType) {
    case "addProduct":
      return <AddProductForm onClose={onClose} />;
    case "updateProduct":
      return <UpdateProductForm productId={productId} onClose={onClose} />;
    case "addProductToCart":
      return <AddProductToCartForm productId={productId} onClose={onClose} />;
    default:
      return null;
  }
}
