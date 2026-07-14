import api from "./api";

const API_URL = "users";

export const registerUser = async (userData) => {
  const response = await api.post(`${API_URL}/signup`, userData);
  return response.data;
};

export const loginUser = async (userData) => {
  const response = await api.post(`${API_URL}/login`, userData);
  return response.data;
};

export const refreshAccessToken = async () => {
  const response = await api.post(`${API_URL}/refresh-token`);
  return response.data;
};

export const logoutUser = async () => {
  const response = await api.post(`${API_URL}/logout`);
  return response.data;
};

export const getProfile = async () => {
  const response = await api.get("users/profile");
  return response.data;
};
