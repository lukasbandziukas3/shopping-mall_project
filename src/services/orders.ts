import api from "../config";
import {Product} from "../interfaces/globalTypes";
const ROUTE = "orders";

export const getAllOrders = async () => {
  return await api.get(`${ROUTE}`);
};

export const saveOrder = async (body: Pick<Product, "_id" | "quantity">) => {
  return await api.post(`${ROUTE}`, body);
};
