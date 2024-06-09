import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CategoryForm } from "./shared/CategoryForm";
import { AddCategoryName } from "./shared/AddCategoryName";
import { categoryUpdated } from "./redux/thunk";

export function UpdateCategoryForm({ isOpen, onClose, categoryID }) {
  const [categoryName, setCategoryName] = useState(
    useSelector((state) => {
      return state.categories.categories.find(
        (category) => category._id === categoryID
      ).name;
    })
  );
  const dispatch = useDispatch();

  const onSaveCategory = () => {
    if (!categoryName) {
      return;
    }
    dispatch(
      categoryUpdated({
        _id: categoryID,
        name: categoryName,
      })
    );
    onClose();
  };

  return (
    <CategoryForm
      isOpen={isOpen}
      onClose={onClose}
      formMessage="Update category"
      onSaveCategory={onSaveCategory}
    >
      <AddCategoryName
        categoryName={categoryName}
        setCategoryName={setCategoryName}
      />
    </CategoryForm>
  );
}
