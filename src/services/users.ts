import api from "../config";
import {User} from "../interfaces/globalTypes";
const ROUTE = "users";

export const getAllUsers = async () => {
    return await api.get(`${ROUTE}`);
};

export const updateUser = async (userId: string,body: Omit<User, "_id">) => {
    return await api.put(`${ROUTE}/${userId}`, body);
};

export const deleteUser = async (userId:string) => {
    return await api.delete(`${ROUTE}/${userId}`);
};