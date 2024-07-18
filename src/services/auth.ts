import api from "../config";
import {Login, SingnUp} from "../interfaces/globalTypes";
const ROUTE = "auth";

export const sendLogin = async (userData: Login) => {
    return await api.post(`${ROUTE}`, userData);
};

export const signUp = async (userData: SingnUp) => {
    return await api.post(`${ROUTE}/signUp`, userData);
}

export const sendRefreshToken= async () => {
    return await api.get(`${ROUTE}/refresh` );
};

export const sendLogout= async () => {
    return await api.post(`${ROUTE}/logout` );
};
