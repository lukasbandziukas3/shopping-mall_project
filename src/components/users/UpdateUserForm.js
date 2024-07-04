import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userUpdated} from "./redux/thunk";
import {FormGeneral} from "../shared/generalComponets/FormGeneral";
import {Autocomplete, TextField} from "@mui/material";
import {TextFieldGeneral} from "../shared/generalComponets/TextFieldGeneral";
import {CheckBoxGeneral} from "../shared/generalComponets/CheckBoxGeneral";

export function UpdateUserForm({ isOpen, onClose, userID }) {
    const { nickName, activeStatus, roles} = useSelector((state) => state.users.users.find(user => user._id === userID));
    const availableRoles = ["customer",'manager',"admin"]
    const [userName, setUserName] = useState(nickName);
    const [isActive, setIsActive] = useState(activeStatus);
    const [ userRoles, setUserRoles ] = useState(roles)

    const dispatch = useDispatch();

    const onUpdateUser = () => {
        if ( !nickName || userRoles.length === 0 ) {
            return;
        }
        dispatch(
            userUpdated( {userID, userData:{
                nickName: userName,
                roles: userRoles,
                activeStatus: isActive,
                    }
                }
            ));
        onClose();
    };

    const onRoleChange = (event, newValue) => {
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
                setValue = {setUserName}
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
