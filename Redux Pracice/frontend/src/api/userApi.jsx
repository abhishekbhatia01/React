import axios from 'axios';

const API_URL = 'http://localhost:5000/api/users';

export const saveUser = async (userData) => {
    const response = await axios.post(API_URL, userData);
    return response.data;
}

export const getAllUsers = async () => {
    const response = await axios.get(API_URL);
    return response.data;
}