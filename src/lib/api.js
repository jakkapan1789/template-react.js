import axios from "axios";
import { useLoading } from "context/hook";

const createAxiosInstance = (token, startLoading, stopLoading) => {
  // const { startLoading, stopLoading } = useLoading();

  const instance = axios.create({
    baseURL: process.env.API_PUBLIC_BASE_URL,
    headers: {
      "Content-Type": "application/json",
    },
  });

  instance.interceptors.request.use(
    (config) => {
      startLoading(); // เริ่มการโหลด
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      stopLoading(); // ปิดการโหลดเมื่อเกิด error
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (response) => {
      stopLoading(); // ปิดการโหลดเมื่อสำเร็จ
      return response;
    },
    (error) => {
      stopLoading(); // ปิดการโหลดเมื่อเกิด error
      return Promise.reject(error);
    }
  );

  return instance;
};
export const useAxiosServices = (providedToken) => {
  const { startLoading, stopLoading } = useLoading();
  const token = providedToken || localStorage.getItem("jwt-token");

  // const apiService = createAxiosInstance(token);

  const apiService = createAxiosInstance(token, startLoading, stopLoading);
  return { apiService };
};
