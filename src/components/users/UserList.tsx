import React, { useState } from "react";
import Box from "@mui/material/Box";
import {UsersTable} from "./UserTable";
import {UpdateUserForm} from "./UpdateUserForm";

export function UsersList() {
    const [isFormUpdateUserOpen, setIsFormUpdateUserOpen] = useState<boolean>(false);
    const [updateUserId, setUpdateUserId] = useState<string | null>(null);

    const openFormUpdateUser = (e:React.MouseEvent<HTMLButtonElement>) => {
        setUpdateUserId((e.target as  HTMLButtonElement).getAttribute("data-user-id"));
        setIsFormUpdateUserOpen(true);
    }

    const closeFormUpdateCategory = () => {
        setIsFormUpdateUserOpen(false);
        setUpdateUserId(null);
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