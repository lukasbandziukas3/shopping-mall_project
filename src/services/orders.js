import api from "../config";
const ROUTE = "orders";

export const getAllOrders = async () => {
  return await api.get(`${ROUTE}`);
};
