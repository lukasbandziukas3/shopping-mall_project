import api from "../config";
const ROUTE = "categories";

export const getAllCategories = async () => {
  return await api.get(`${ROUTE}`);
};

export const saveCategory = async (body) => {
  return await api.post(`${ROUTE}`, body);
};

export const updateCategory = async (categoryId,body) => {
  return await api.put(`${ROUTE}/${categoryId}`, body);
};
