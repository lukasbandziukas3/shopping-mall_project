import {FormControl, FormHelperText, InputLabel, Select, SelectChangeEvent} from "@mui/material";
import React, {ReactNode} from "react";

export function SelectorGeneral({ value, label, error, errorMessage,onChange,children }: {
    value: string,
    label: string,
    error:boolean,
    errorMessage:string,
    onChange: (event: SelectChangeEvent<string>, child: ReactNode) => void
    children: React.ReactNode;
}
) {
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
