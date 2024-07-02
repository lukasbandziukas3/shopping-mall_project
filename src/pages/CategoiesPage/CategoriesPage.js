import { CategoriesList } from "../../components/categories/CategoriesList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../components/categories/redux/thunk";
import {CustomProgress} from "../../components/shared/CustomProgress";
import {Box} from "@mui/material";

export default function CategoriesPage() {
  const status = useSelector((state) => state.categories.status);
  const dispatch = useDispatch();
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCategories());
    }
  }, [status, dispatch]);
  let content
  if (status === "loading" || status === "idle") {
    content = <CustomProgress/>
  }
  else{
    content = <CategoriesList />
  }
  return ( <Box>
            {content}
          </Box>
     );
}
