import { useState } from "react";
import Box from "@mui/material/Box";
import {UsersTable} from "./UserTable";
import {UpdateUserForm} from "./UpdateUserForm";

export function UsersList() {
    const [isFormUpdateUserOpen, setIsFormUpdateUserOpen] = useState(false);
    const [updateUserId, setUpdateUserId] = useState(null);

    const openFormUpdateUser = (e) => {
        setUpdateUserId(e.target.getAttribute("data-user-id"));
        console.log(updateUserId);
        setIsFormUpdateUserOpen(true);
    }

    const closeFormUpdateCategory = () => {
        setIsFormUpdateUserOpen(false);
    };

    return (
        <Box sx={{ width: "100%" }}>
            <UsersTable onUpdate={openFormUpdateUser} />
            { isFormUpdateUserOpen && (
                <UpdateUserForm
                    isOpen={isFormUpdateUserOpen}
                    onClose={closeFormUpdateCategory}
                    userID={updateUserId}
                />
            )}
        </Box>
    );
}