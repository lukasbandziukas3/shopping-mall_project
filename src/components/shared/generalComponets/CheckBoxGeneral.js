import {Checkbox, FormControlLabel } from "@mui/material";

export function CheckBoxGeneral ({ value, setValue, label}) {
    const onChanged = (event) => {
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
