import api from "../config";
const ROUTE = "orders";

export const getAllOrders = async () => {
  return await api.get(`${ROUTE}`);
};

export const saveOrder = async (body) => {
  return await api.post(`${ROUTE}`, body);
};
