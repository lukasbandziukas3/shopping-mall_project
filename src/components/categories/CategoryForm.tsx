import React, { useState } from "react";
import {FormGeneral} from "../shared/generalComponets/FormGeneral";
import {TextFieldGeneral} from "../shared/generalComponets/TextFieldGeneral";
import {useAppSelector} from "../../hooks/reduxHooksTS";

export function CategoryForm({ isOpen, onClose, categoryID, onSubmit, formMessage }:{
    isOpen: boolean, onClose: () => void, onSubmit: (name:string) => void, categoryID: string | null, formMessage: string
}) {
  const selectedCategory = useAppSelector((state) => {
      return state.categories.categories.find(
          (category) => category._id === categoryID
      )?.name
    }
  );

  const [categoryName, setCategoryName] = useState<string>(selectedCategory || '');

  const onCategoryChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setCategoryName(event.target.value);
  }

  const onSaveCategory = () => {
    if (!categoryName) {
      return;
    }
    onSubmit(categoryName);
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
