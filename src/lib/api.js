import axios from "axios";

const createAxiosInstance = (token) => {
  const instance = axios.create({
    baseURL: process.env.API_PUBLIC_BASE_URL,
    headers: {
      "Content-Type": "application/json",
    },
  });

  instance.interceptors.request.use(
    (config) => {
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return instance;
};

export const useAxiosServices = (providedToken) => {
  const token = providedToken || localStorage.getItem("jwt-token");

  const apiService = createAxiosInstance(token);

  return { apiService };
};
