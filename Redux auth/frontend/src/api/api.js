import axios from "axios";
import { updateAccessToken, logout } from "../redux/authSlice";

let store;

export const injectStore = (_store) => {
  store = _store;
};

const api = axios.create({
  baseURL: "http://localhost:5000/api",
  withCredentials: true,
});

// Request Interceptor
api.interceptors.request.use(
  (config) => {
    if (store) {
      const token = store.getState().auth.accessToken;

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor
api.interceptors.response.use(
  (response) => response,

  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        const response = await axios.post(
          "http://localhost:5000/api/auth/refresh",
          {},
          {
            withCredentials: true,
          }
        );

        const { accessToken } = response.data;

        store.dispatch(updateAccessToken(accessToken));

        originalRequest.headers.Authorization = `Bearer ${accessToken}`;

        return api(originalRequest);

      } catch (err) {
        store.dispatch(logout());

        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  }
);

export default api; 