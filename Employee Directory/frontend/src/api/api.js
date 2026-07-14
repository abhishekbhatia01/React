import axios from "axios";
import { updateAccessToken, logOut } from "../redux/features/authSlice";

let store;

export const injectStore = (_store) => {
  store = _store;
};

const api = axios.create({
  baseURL: "http://localhost:5000/api",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
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
  (error) => Promise.reject(error),
);

// Response Interceptor
api.interceptors.response.use(
  (response) => response,

  async (error) => {
    const originalRequest = error.config;

    // Don't retry refresh endpoint
    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      !originalRequest.url.includes("/users/refresh-token")
    ) {
      originalRequest._retry = true;

      try {
        const response = await axios.post(
          "http://localhost:5000/api/users/refresh-token",
          {},
          {
            withCredentials: true,
          },
        );

        const { accessToken } = response.data;

        store.dispatch(updateAccessToken(accessToken));

        originalRequest.headers.Authorization = `Bearer ${accessToken}`;

        return api(originalRequest);
      } catch (err) {
        store.dispatch(logOut());

        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  },
);

export default api;
