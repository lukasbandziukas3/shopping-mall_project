import React, { useState, useCallback } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {CategoryForm} from "./CategoryForm";
import { CategoriesApearence } from "./CategoriesApearence";
import {categoryAdded, categoryUpdated} from "./redux/thunk";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooksTS";

export function CategoriesList() {
  const [isFormCategoryOpen, setIsFormCategoryOpen] = useState<boolean>(false);
  const [updateCategoryId, setUpdateCategoryId] = useState<string | null>(null);

  const roles = useAppSelector(state => state.auth.roles )

  const dispatch = useAppDispatch();

  const onSaveCategory = (name: string) => {
    dispatch(categoryAdded({name}));
  }

  const onUpdateCategory = (name:string)=> {
    if(!updateCategoryId){
      throw new Error("Category not found");
    }
    dispatch( categoryUpdated( {name, _id: updateCategoryId}));
  }

  const openFormCategory = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    setUpdateCategoryId((e.target as HTMLButtonElement).getAttribute("data-category-id"));
    setIsFormCategoryOpen(true);
  }, []);

  const closeFormCategory = () => {
    setUpdateCategoryId(null);
    setIsFormCategoryOpen(false);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <CategoriesApearence onUpdate={openFormCategory} />

      { roles.includes('manager') &&
      <Button sx={{ m: 5 }} variant="contained" onClick={openFormCategory}>
        Add new category
      </Button>
      }
      {isFormCategoryOpen && (
        <CategoryForm
          isOpen={isFormCategoryOpen}
          categoryID = {updateCategoryId}
          onSubmit = {updateCategoryId ? onUpdateCategory : onSaveCategory}
          formMessage ={updateCategoryId ? "update" : "add"}
          onClose={closeFormCategory}
        />
      )}
    </Box>
  );
}
