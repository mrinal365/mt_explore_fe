import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000",
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use(
  (config) => {
    // TODO - make this modular
    const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response?.status === 401 && typeof window !== "undefined") {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    return Promise.reject(error.response?.data || error.message);
  }
);

export default api;
