import { TextField } from "@mui/material";
import {ChangeEvent} from "react";

export function TextFieldGeneral ({ value, onValueChange, label, errorMessage, error, type = 'text' }:{
    value: string | number,
    onValueChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    label: string,
    errorMessage: string,
    error: boolean,
    type?: "text" | "number"
}) {
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
