// src/services/authService.ts
import api from "./index";

export async function login(email: string, password: string) {
  return api
    .post("/auth/login", { email, password })
    .then((res) => res)
    .catch((err) => {
      console.error("Login error:", err);
      throw err;
    });
}

export async function register(data: { email: string; password: string; name: string }) {
  return api
    .post("/auth/register", data)
    .then((res) => res)
    .catch((err) => {
      console.error("Register error:", err);
      throw err;
    });
}
