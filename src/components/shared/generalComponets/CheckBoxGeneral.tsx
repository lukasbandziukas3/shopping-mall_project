import {Checkbox, FormControlLabel } from "@mui/material";
import React from "react";

export function CheckBoxGeneral ({ value, setValue, label}:{value:boolean,setValue:(val:boolean)=>void,label:string}) {
    const onChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.checked);
    };

    return (
        <FormControlLabel control={
            <Checkbox checked={value} onChange={onChanged} />
        }
                          label={label}
        />
    );
}
