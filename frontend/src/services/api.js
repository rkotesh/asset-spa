import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000/api/users/",
});

export const registerUser = (userData) => API.post("register/", userData);
export const loginUser = (credentials) => API.post("login/", credentials);
export const getProfile = (token) =>
  API.get("profile/", {
    headers: { Authorization: `Bearer ${token}` },
  });
