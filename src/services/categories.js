import api from "../config";

export const getAllCategories = async () => {
  return await api.get("/allCategories");
};
