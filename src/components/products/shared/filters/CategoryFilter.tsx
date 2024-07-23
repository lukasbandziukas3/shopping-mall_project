import {Autocomplete, TextField} from "@mui/material";

import {setCategoryFilters} from "../../redux/productsSlice";
import {useAppDispatch, useAppSelector} from "../../../../hooks/reduxHooksTS";
import React from "react";
import {Category} from "../../../../interfaces/globalTypes";

export const  CategoryFilter = () => {
    const categories = useAppSelector((state) => state.categories.categories);
    const filters = useAppSelector((state) => state.products.filters);
    const dispatch= useAppDispatch();
    const onFilterChange = (_event:  React.SyntheticEvent, newValue: Category[]) => {
        dispatch(setCategoryFilters(newValue));
    }
    return (
            <Autocomplete
                sx = {{minWidth: 300}}
                multiple
                value={filters}
                id="category-filter"
                options={categories}
                getOptionLabel={(option) => option.name}
                onChange={onFilterChange}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        variant="standard"
                        label="category filters"
                    />
                )}
            />
    );
}
