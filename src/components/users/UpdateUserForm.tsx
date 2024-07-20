import React, {ChangeEvent, useState} from "react";
import { userUpdated} from "./redux/thunk";
import {FormGeneral} from "../shared/generalComponets/FormGeneral";
import {Autocomplete, TextField} from "@mui/material";
import {TextFieldGeneral} from "../shared/generalComponets/TextFieldGeneral";
import {CheckBoxGeneral} from "../shared/generalComponets/CheckBoxGeneral";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooksTS";
import {Roles} from "../../interfaces/globalTypes";

export function UpdateUserForm({ isOpen, onClose, userID }:{isOpen:boolean, onClose:() => void, userID: string | null}) {
    const { nickName, activeStatus, roles} = useAppSelector((state) => state.users.users.find(user => user._id === userID))!;
    const availableRoles: Roles[] = ["customer",'manager',"admin"]
    const [userName, setUserName] = useState<string>(nickName);
    const [isActive, setIsActive] = useState<boolean>(activeStatus);
    const [ userRoles, setUserRoles ] = useState<Roles[]>(roles)

    const dispatch = useAppDispatch();

    const onUpdateUser = () => {
        if ( !nickName || userRoles.length === 0 ) {
            return;
        }
        dispatch(
            userUpdated( {
                _id:userID!,
                nickName: userName,
                roles: userRoles,
                activeStatus: isActive
                }
            ));
        onClose();
    };

    const onUserNameChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setUserName(event.target.value);
    }
    const onRoleChange = (_event: React.SyntheticEvent, newValue: Roles[]) => {
        setUserRoles(newValue);
    }

    return (
        <FormGeneral
            isOpen={isOpen}
            onClose={onClose}
            formMessage="Update"
            onSave={onUpdateUser}
            maxWidth='md'
        >
           <CheckBoxGeneral  value={isActive} setValue={setIsActive} label='is active' />
            <TextFieldGeneral
                value = {userName}
                onValueChange= {onUserNameChange}
                label = "User name"
                errorMessage = "User name could not be empty"
                error = {userName.length === 0 }
            />
            <Autocomplete
                sx = {{minWidth: 300}}
                multiple
                value={userRoles}
                id="roles"
                options={availableRoles}
                onChange={onRoleChange}
                renderInput={(params) => (
                <TextField
                      {...params}
                      variant="standard"
                      label="roles"
                      error={userRoles.length === 0}
                      helperText={userRoles.length === 0 ? 'Please select role' : ''}
                      />
                    )}
            />
        </FormGeneral>
    );
}
