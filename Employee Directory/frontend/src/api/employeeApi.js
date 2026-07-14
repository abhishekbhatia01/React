import api from "./api";
const API_URL = "employees";

export const getEmployees = async () => {
  const response = await api.get(API_URL);
  return response.data;
};

export const createEmployee = async (employeeData) => {
  const response = await api.post(API_URL, employeeData);
  return response.data;
};

export const getEmployeeById = async (id) => {
  const response = await api.get(`${API_URL}/${id}`);
  return response.data;
};

export const updateEmployee = async (id, employeeData) => {
  const response = await api.put(`${API_URL}/${id}`, employeeData);
  return response.data;
};

export const deleteEmployee = async (id) => {
  const response = await api.delete(`${API_URL}/${id}`);
  return response.data;
};