import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import {useDispatch, useSelector} from "react-redux";
import {setSearchText} from "../../redux/productsSlice";
import {fetchProducts} from "../../redux/thunk";
import {useLayoutEffect, useRef} from "react";

export const  ProductSearch = ( )  => {
   const dispatch = useDispatch();
    const productSearchText = useSelector((state) => state.products.searchText);
   const InitValue = useRef(productSearchText);

    useLayoutEffect(() => {
       if (InitValue.current === productSearchText) {
           return;
       }
        const timoutId = setTimeout(() => {
            dispatch(fetchProducts());
        }, 500)
        return () => clearTimeout(timoutId)
    }, [productSearchText, dispatch])

   const onChange = (e) => {
       dispatch(setSearchText(e.target.value));
   }
    return (
                <Input
                    id="product-search"
                    placeholder="product name"
                    value={productSearchText}
                    onChange={onChange}
                    endAdornment={
                        <InputAdornment position="end">
                            <SearchIcon />
                        </InputAdornment>
                    }
                />
    );
}