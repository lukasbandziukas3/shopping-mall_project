import api from "../config";
const ROUTE = "products";

export const getAllProducts = async () => {
  return await api.get(`${ROUTE}`);
};

export const saveProduct = async (body) => {
  return await api.post(`${ROUTE}`, body);
};

export const updateProduct = async (body) => {
  return await api.put(`${ROUTE}`, body);
};
