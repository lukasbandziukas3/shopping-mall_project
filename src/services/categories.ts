import api from "../config";
import {Category} from "../interfaces/globalTypes";
const ROUTE = "categories";

export const getAllCategories = async () => {
  return await api.get(`${ROUTE}`);
};

export const saveCategory = async (body: Omit<Category,"_id">) => {
  return await api.post(`${ROUTE}`, body);
};

export const updateCategory = async (categoryId:string,body:Omit<Category,"_id">) => {
  return await api.put(`${ROUTE}/${categoryId}`, body);
};
