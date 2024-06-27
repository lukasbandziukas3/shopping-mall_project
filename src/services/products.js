import api from "../config";
const ROUTE = "products";

export const getAllProducts = async (searchParams) => {
  return await api.get(`${ROUTE}`,{params:searchParams});
};

export const saveProduct = async (body) => {
  return await api.post(`${ROUTE}`, body);
};

export const updateProduct = async (productId,body) => {
  return await api.put(`${ROUTE}/${productId}`, body);
};
