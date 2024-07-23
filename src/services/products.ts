import api from "../config";
import {ProductSend} from "../interfaces/globalTypes";
const ROUTE = "products";

export const getAllProducts = async (searchParams:{filtersCategory:string[], searchText:string}) => {
  return await api.get(`${ROUTE}`,{params:searchParams});
};

export const saveProduct = async (body: Omit<ProductSend, "_id">) => {
  return await api.post(`${ROUTE}`, body);
};

export const updateProduct = async (productId:string, body:Omit<ProductSend, "_id">) => {
  return await api.put(`${ROUTE}/${productId}`, body);
};
