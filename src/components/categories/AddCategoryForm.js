import { useState } from "react";
import { useDispatch } from "react-redux";
import { CategoryForm } from "./shared/CategoryForm";
import { AddCategoryName } from "./shared/AddCategoryName";
import { categoryAdded } from "./redux/categoriesSlice";

export function AddCategoryForm({ isOpen, onClose }) {
  const [categoryName, setCategoryName] = useState("");
  const dispatch = useDispatch();

  const onSaveCategory = () => {
    if (!categoryName) {
      return;
    }
    dispatch(
      categoryAdded({
        id: Math.floor(Math.random() * 1000),
        name: categoryName,
      })
    );
    onClose();
  };

  return (
    <CategoryForm
      isOpen={isOpen}
      onClose={onClose}
      formMessage="Add category"
      onSaveCategory={onSaveCategory}
    >
      <AddCategoryName
        categoryName={categoryName}
        setCategoryName={setCategoryName}
      />
    </CategoryForm>
  );
}
