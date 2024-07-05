import { TextField } from "@mui/material";

export function TextFieldGeneral ({ value, onValueChange, label, errorMessage, error, type = 'text' }) {
    return (
        <TextField
            label= {label}
            error={error}
            helperText={ error ? errorMessage : label }
            placeholder= {label}
            value={value}
            onChange={onValueChange}
            type={type}
        />
    );
}
