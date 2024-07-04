import {FormControl, FormHelperText, InputLabel, Select} from "@mui/material";

export function SelectorGeneral({ value, setValue,label, error, errorMessage,children }) {
    const onChange = (e) => {
        setValue(e.target.value);
    }
    console.log(errorMessage)
    return (
        <FormControl sx={{minWidth: 200}}>
            <InputLabel
                sx={{
                    color: error ? "error.main" : "grey",
                }}
                id={label}
            >
                {label}
            </InputLabel>
            <Select
                autoWidth={true}
                label={label}
                labelId={label}
                error={error}
                value={value}
                onChange={onChange}
            >
                {children}
            </Select>
            <FormHelperText error={error}>
                {errorMessage}
            </FormHelperText>
        </FormControl>
    );
}
