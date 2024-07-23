import axios, {AxiosError, AxiosResponse, InternalAxiosRequestConfig} from "axios";
import { sendRefreshToken} from "./services/auth";

interface RequestInstance {
  config: InternalAxiosRequestConfig,
  resolve: any,
  reject: any,
}

interface ErrorResponse {
  error: string;
}

interface RefreshTokenResponse {
  accessToken: string;
}

const refreshAndRetryQueue: RequestInstance[] = [];
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
},async (err:AxiosError)=>{
  if(err.response?.status === 401){

    if(err.request.responseURL.includes("refresh")){
      localStorage.removeItem("jwtToken");
      (err.response.data as ErrorResponse).error = "Your login has expired";
      window.location.href = "/authorization";
      return Promise.reject(err);
    }
    const originalRequest: InternalAxiosRequestConfig | undefined = err.config;
    if(!originalRequest){
      return;
    }
    if(!isRefreshing ) {
      console.log(originalRequest,"request");
      isRefreshing = true;
      try {
        const response: AxiosResponse<RefreshTokenResponse> = await sendRefreshToken();
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
  return Promise.reject((err.response?.data as ErrorResponse).error);
  });

export default apiInstance;
