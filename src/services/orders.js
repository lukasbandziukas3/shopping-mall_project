import api from "../config";

export const getAllOrders = async () => {
  return await api.get("/allOrders");
};
