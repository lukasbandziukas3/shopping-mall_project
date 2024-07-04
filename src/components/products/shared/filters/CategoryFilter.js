import {useDispatch, useSelector} from "react-redux";
import {Autocomplete, TextField} from "@mui/material";

import {setCategoryFilters} from "../../redux/productsSlice";

export const  CategoryFilter = () => {
    const categories = useSelector((state) => state.categories.categories);
    const filters = useSelector((state) => state.products.filters);
    const dispatch= useDispatch();
    const onFilterChange = (event, newValue) => {
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
