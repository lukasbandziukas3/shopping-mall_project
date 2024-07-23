import {Box, Button} from "@mui/material";
import {CategoryFilter} from "./shared/filters/CategoryFilter";
import {ProductSearch} from "./shared/filters/ProductSearch";
import {fetchProducts} from "./redux/thunk";
import {useAppDispatch} from "../../hooks/reduxHooksTS";



export const ProductFilter = () => {
    const dispatch= useAppDispatch();

    const onFilterProduct = ()=> {
        dispatch( fetchProducts());
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
