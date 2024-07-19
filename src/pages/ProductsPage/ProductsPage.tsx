import {Box} from "@mui/material";
import {ReactElement, ReactNode, useEffect} from "react";
import { ProductsList } from "../../components/products/ProductsList";
import { fetchProducts } from "../../components/products/redux/thunk";
import { fetchCategories } from "../../components/categories/redux/thunk";
import {ProductFilter} from "../../components/products/ProductFilter";
import {CustomProgress} from "../../components/shared/CustomProgress";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooksTS";


export default function ProductsPage(): ReactElement {
  const statusCategories = useAppSelector((state) => state.categories.status);
  const statusProducts = useAppSelector((state) => state.products.status);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (statusCategories === "idle") {
      dispatch(fetchCategories());
    }

    if (statusProducts === "idle") {
      dispatch(fetchProducts());
    }
  }, [statusCategories, statusProducts, dispatch]);
  let  content: ReactNode;
  if (statusCategories === "loading" || statusCategories === "idle"
      || statusProducts === "loading" || statusProducts === "idle") {
    content = <CustomProgress/>
  }
  else{
    content =<ProductsList />
  }
  return (
  <Box>
    <ProductFilter/>
    {content}
  </Box>
 );
}
