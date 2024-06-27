import {useDispatch, useSelector} from "react-redux";
import {Box, Button} from "@mui/material";
import {CategoryFilter} from "./shared/filters/CategoryFilter";
import {ProductSearch} from "./shared/filters/ProductSearch";
import {fetchProducts} from "./redux/thunk";



export const ProductFilter = ()=>{
    const dispatch= useDispatch();
    const { filters, searchText } = useSelector ((state)=> state.products);
    const onFilterProduct = ()=> {
       const filtersCategory =  filters.map(filter => filter._id);
        dispatch(
            fetchProducts({
                filtersCategory,
                searchText,
            })
        );
    }
    return (
      <Box sx={{
          pr:3,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: "end",
          alignItems: "end",
          gap: 3
      }}>
          <ProductSearch/>
          <CategoryFilter/>
          <Button variant="contained" onClick={onFilterProduct}>
              Filter Product
          </Button>
      </Box>
    );
}
