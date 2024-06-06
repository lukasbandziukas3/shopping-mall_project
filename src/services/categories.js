import api from "../config";
const ROUTE = "categories";

export const getAllCategories = async () => {
  return await api.get(`${ROUTE}`);
};

export const saveCategory = async (body) => {
  return await api.post(`${ROUTE}`, body);
};

export const updateCategory = async (body) => {
  return await api.put(`${ROUTE}`, body);
};
