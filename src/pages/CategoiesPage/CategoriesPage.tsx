import { CategoriesList } from "../../components/categories/CategoriesList";
import React, {ReactElement, useEffect} from "react";
import { fetchCategories } from "../../components/categories/redux/thunk";
import {CustomProgress} from "../../components/shared/CustomProgress";
import {Box} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooksTS";

export default function CategoriesPage(): ReactElement {
  const status = useAppSelector(state => state.categories.status);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCategories());
    }
  }, [status, dispatch]);
  let content: React.ReactNode;
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
