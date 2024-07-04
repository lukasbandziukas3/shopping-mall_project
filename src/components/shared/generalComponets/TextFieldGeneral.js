import { TextField } from "@mui/material";

export function TextFieldGeneral ({ value, setValue, label, errorMessage, error, type = 'text' }) {
    const onChanged = (event) => {
        setValue(event.target.value);
    };

    return (
        <TextField
            label= {label}
            error={error}
            helperText={ error ? errorMessage : label }
            placeholder= {label}
            value={value}
            onChange={onChanged}
            type={type}
        />
    );
}
