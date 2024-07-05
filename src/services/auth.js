import api from "../config";
const ROUTE = "auth";

export const sendLogin = async (userData) => {
    return await api.post(`${ROUTE}`, userData);
};

export const sendRefreshToken= async () => {
    return await api.get(`${ROUTE}/refresh` );
};

export const sendLogout= async () => {
    return await api.post(`${ROUTE}/logout` );
};
