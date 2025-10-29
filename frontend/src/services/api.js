import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api", // Django backend
  headers: {
    "Content-Type": "application/json",
  },
});

// ----------- AUTH APIs -----------

export const registerUser = async (userData) => {
  const response = await api.post("/users/register/", userData);
  return response.data;
};

export const loginUser = async (credentials) => {
  const response = await api.post("/users/login/", credentials);
  return response.data;
};

export const getProfile = async (token) => {
  const response = await api.get("/users/profile/", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export default api;
