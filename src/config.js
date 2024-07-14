import axios from "axios";
import { sendRefreshToken} from "./services/auth";

const refreshAndRetryQueue = [];
let isRefreshing = false;

export const options = {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};

const apiInstance = axios.create({
  withCredentials: true,
  baseURL:  "http://localhost:8000",
  headers: options.headers,
});

apiInstance.interceptors.request.use(async (config) => {
  const accessToken = localStorage.getItem("jwtToken");
  if (accessToken) {
    config.headers.Authorization = `Bearer ${localStorage.getItem("jwtToken")}`;
  }
  return config;
});

apiInstance.interceptors.response.use(async (response) => {
    return response;
},async (err)=>{
  if(err.response?.status === 401){
    if(err.request.responseURL.includes("refresh")){
      localStorage.removeItem("jwtToken");
      err.response.data.message = "Your login has expired";
      window.location = "/authorization";
      return Promise.reject(err);
    }
    const originalRequest = err.config;
    if(!isRefreshing) {
      isRefreshing = true;
      try {
        const response = await sendRefreshToken();
        if (response?.data) {
          localStorage.setItem("jwtToken", response.data.accessToken);
          refreshAndRetryQueue.forEach(({ config, resolve, reject }) => {
            apiInstance
                .request(config)
                .then((response) => resolve(response))
                .catch((err) => reject(err));
          });
          refreshAndRetryQueue.length = 0;
          return apiInstance(originalRequest);
        }
      } catch (refreshError) {
        throw refreshError;
      }
      finally {
        isRefreshing = false;
      }
      }
      return new Promise((resolve, reject) => {
        refreshAndRetryQueue.push({ config: originalRequest, resolve, reject });
      });
    }
  return Promise.reject(err.response?.data.error);
  });

export default apiInstance;
