import { createSlice } from "@reduxjs/toolkit";
import {
  loginUser,
  logoutUser,
  registerUser,
  refreshToken,
} from "../api/authApi";

const initialState = {
  user: null,
  accessToken: null,
  loading: false,
  error: null,
  isAuthChecked: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    loginSuccess: (state, action) => {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      state.error = null;
    },
    logout: (state) => {
      state.user = null;
      state.accessToken = null;
      state.error = null;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
    updateAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    setAuthChecked: (state) => {
      state.isAuthChecked = true;
    },
  },
});

export const {
  setLoading,
  loginSuccess,
  logout,
  setError,
  clearError,
  updateAccessToken,
  setAuthChecked,
} = authSlice.actions;

export default authSlice.reducer;

export const loginThunk = (userData) => {
  return async (dispatch) => {
    dispatch(setLoading(true));

    try {
      const response = await loginUser(userData);
      dispatch(loginSuccess(response));

      return response;
    } catch (error) {
      throw error;
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export const registerThunk = (userData) => {
  return async (dispatch) => {
    dispatch(setLoading(true));

    try {
      const data = await registerUser(userData);

      return data;
    } catch (err) {
      dispatch(setError(err.response?.data?.message));

      throw err;
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export const refreshThunk = () => {
  return async (dispatch) => {
    console.log("1");

    try {
      console.log("2");

      const data = await refreshToken();

      console.log("3", data);

      dispatch(loginSuccess(data));
    } catch (err) {
      console.log("4", err);

      dispatch(logout());
    } finally {
      console.log("5");

      dispatch(setAuthChecked());

      dispatch(setLoading(false));
    }
  };
};

    export const logOutThunk = () => {
      return async (dispatch) => {
        try {
          await logoutUser();
          dispatch(logout());
        } catch (error) {
          console.error("Logout failed:", error);
        }
      };
    };
