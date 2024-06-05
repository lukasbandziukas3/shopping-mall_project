import api from "../config";

export const getAllProducts = async () => {
  return await api.get("/allProducts");
};
