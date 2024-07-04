import { useState } from "react";
import { useDispatch } from "react-redux";
import { categoryAdded } from "./redux/thunk";
import {FormGeneral} from "../shared/generalComponets/FormGeneral";
import {TextFieldGeneral} from "../shared/generalComponets/TextFieldGeneral";

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
    <FormGeneral
      isOpen={isOpen}
      onClose={onClose}
      formMessage="Add category"
      onSave={onSaveCategory}
      maxWidth='sm'
    >
      <TextFieldGeneral
          value = {categoryName}
          setValue = {setCategoryName}
          label = "Category name"
          errorMessage = "category name could not be empty"
          error = {categoryName.length === 0 }
      />
    </FormGeneral>
  );
}
