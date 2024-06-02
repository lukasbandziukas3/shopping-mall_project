import { useState, useCallback } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { AddCategoryForm } from "./AddCategoryForm";
import { UpdateCategoryForm } from "./UpdateCategoryForm";
import { CategoriesApearence } from "./CategoriesApearence";

export function CategoriesList() {
  const [isFormAddCategoryOpen, setIsFormAddCategoryOpen] = useState(false);
  const [isFormUpdateCategoryOpen, setIsFormUpdateCategoryOpen] =
    useState(false);
  const [updateCategoryId, setUpdateCategoryId] = useState(null);

  const openFormAddCategory = () => {
    setIsFormAddCategoryOpen(true);
  };

  const openFormUpdateCategory = useCallback((e) => {
    setUpdateCategoryId(e.target.getAttribute("data-category-id"));
    setIsFormUpdateCategoryOpen(true);
  }, []);

  const closeFormUpdateCategory = () => {
    setIsFormUpdateCategoryOpen(false);
  };

  const closeFormAddCategory = () => {
    setIsFormAddCategoryOpen(false);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <CategoriesApearence onUpdate={openFormUpdateCategory} />
      <Button sx={{ m: 5 }} variant="contained" onClick={openFormAddCategory}>
        Add new category
      </Button>
      {isFormAddCategoryOpen && (
        <AddCategoryForm
          isOpen={isFormAddCategoryOpen}
          onClose={closeFormAddCategory}
        />
      )}
      {isFormUpdateCategoryOpen && (
        <UpdateCategoryForm
          isOpen={isFormUpdateCategoryOpen}
          onClose={closeFormUpdateCategory}
          categoryID={Number(updateCategoryId)}
        />
      )}
    </Box>
  );
}
