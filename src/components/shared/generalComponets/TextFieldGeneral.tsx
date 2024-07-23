import { TextField } from "@mui/material";
import {ChangeEvent} from "react";

interface TextFieldGeneralProps {
    onValueChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    label: string,
    errorMessage: string,
    error: boolean,
}

interface TextFieldTextOrPassword extends TextFieldGeneralProps {
    value: string,
    type?: "text" |  "password"
}

interface TextFieldNumber extends TextFieldGeneralProps {
    value: number,
    type: "number"
}


export function TextFieldGeneral ({ value, onValueChange, label, errorMessage, error, type = 'text' }: TextFieldTextOrPassword | TextFieldNumber) {
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
