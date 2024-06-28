import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductsList } from "../../components/products/ProductsList";
import { fetchProducts } from "../../components/products/redux/thunk";
import { fetchCategories } from "../../components/categories/redux/thunk";
import { CustomProgress } from "../../components/shared/CustomProgress";
import {ProductFilter} from "../../components/products/ProductFilter";

export function ProductsPage() {
  const statusCategories = useSelector((state) => state.categories.status);
  const statusProducts = useSelector((state) => state.products.status);
  const dispatch = useDispatch();
  useEffect(() => {
    if (statusCategories === "idle") {
      dispatch(fetchCategories());
    }
    if (statusProducts === "idle") {
      dispatch(fetchProducts());
    }
  }, [statusCategories, statusProducts, dispatch]);
  let content;
  if (statusCategories === "loading" || statusProducts === "loading") {
    content = <CustomProgress />;
  }
  if (statusCategories === "succeeded" && statusProducts === "succeeded") {
    content = <ProductsList />;
  }
  return (
  <>
    <ProductFilter/>
    {content}
  </>
 );
}
