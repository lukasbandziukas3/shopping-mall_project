import {useDispatch, useSelector} from "react-redux";
import {Autocomplete, Stack, TextField} from "@mui/material";

import {setCategoryFilters} from "../../redux/productsSlice";

export const  CategoryFilter = () => {
    const categories = useSelector((state) => state.categories.categories);
    const filters = useSelector((state) => state.products.filters);
    const dispatch= useDispatch();
    const onFilterChange = (event, newValue) => {
        dispatch(setCategoryFilters(newValue));
    }
    return (
        <Stack spacing={3} sx={{ width: 300 }}>
            <Autocomplete
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
        </Stack>
    );
}
