import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { categoryUpdated } from "./redux/thunk";
import {FormGeneral} from "../shared/generalComponets/FormGeneral";
import {TextFieldGeneral} from "../shared/generalComponets/TextFieldGeneral";

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
          categoryUpdated( {categoryID, categoryData:{
            name: categoryName,
          }
         }
      ));
    onClose();
  };

  return (
    <FormGeneral
      isOpen={isOpen}
      onClose={onClose}
      formMessage="Update category"
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
