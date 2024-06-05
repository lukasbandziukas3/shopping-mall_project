import axios from "axios";

export const API = "http://localhost:8000";

export const options = {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};

const apiInstance = axios.create({
  baseURL: API,
  headers: options.headers,
});

export default apiInstance;
