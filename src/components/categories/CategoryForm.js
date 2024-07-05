import { useState } from "react";
import { useSelector } from "react-redux";
import {FormGeneral} from "../shared/generalComponets/FormGeneral";
import {TextFieldGeneral} from "../shared/generalComponets/TextFieldGeneral";

export function CategoryForm({ isOpen, onClose, categoryID, onSubmit, formMessage }) {
  const selectedCategory =useSelector((state) => {
      return state.categories.categories.find(
          (category) => category._id === categoryID
      )?.name
    }
  );

  const [categoryName, setCategoryName] = useState(selectedCategory);

  const onCategoryChange = (event) => {
        setCategoryName(event.target.value);
  }

  const onSaveCategory = () => {
    if (!categoryName) {
      return;
    }
    onSubmit({name:categoryName})
    onClose();
  };

  return (
    <FormGeneral
      isOpen={isOpen}
      onClose={onClose}
      formMessage= {formMessage}
      onSave={onSaveCategory}
      maxWidth='sm'
    >
        <TextFieldGeneral
            value = {categoryName}
            onValueChange = { onCategoryChange }
            label = "Category name"
            errorMessage = "category name could not be empty"
            error = {categoryName?.length === 0 }
        />
    </FormGeneral>
  );
}
