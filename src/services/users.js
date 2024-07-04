import api from "../config";
const ROUTE = "users";

export const getAllUsers = async () => {
    return await api.get(`${ROUTE}`);
};

export const saveUser = async (body) => {
    return await api.post(`${ROUTE}`, body);
};

export const updateUser = async (userId,body) => {
    return await api.put(`${ROUTE}/${userId}`, body);
};

export const deleteUser = async (userId) => {
    return await api.delete(`${ROUTE}/${userId}`);
};