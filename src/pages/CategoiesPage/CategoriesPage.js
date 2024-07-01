import { CategoriesList } from "../../components/categories/CategoriesList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../components/categories/redux/thunk";

export default function CategoriesPage() {
  const status = useSelector((state) => state.categories.status);
  const dispatch = useDispatch();
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCategories());
    }
  }, [status, dispatch]);
  return <CategoriesList />;
}
