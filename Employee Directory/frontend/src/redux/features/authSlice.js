import { createSlice } from "@reduxjs/toolkit";
import {
  loginUser,
  refreshAccessToken,
  registerUser,
  logoutUser,
  getProfile,
} from "../../api/authApi";

const initialState = {
  user: null,
  accessToken: null,
  loading: false,
  error: null,
  isAuthCheck: false,
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
      state.loading = false;
      state.error = null;
    },
    logOut: (state) => {
      state.user = null;
      state.accessToken = null;
      state.loading = false;
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
    setAuthCheck: (state, action) => {
      state.isAuthCheck = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const {
  setLoading,
  loginSuccess,
  logOut,
  setError,
  clearError,
  updateAccessToken,
  setAuthCheck,
  setUser,
} = authSlice.actions;

export default authSlice.reducer;

export const loginThunk = (userData) => {
  return async (dispatch) => {
    dispatch(setLoading(true));

    try {
      const response = await loginUser(userData);
      localStorage.removeItem("loggedOut");
      dispatch(loginSuccess(response));

      return response;
    } catch (error) {
      dispatch(setError(error.response?.data?.message || "Login failed"));
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
      const response = await registerUser(userData);
      dispatch(loginSuccess(response));

      return response.data;
    } catch (error) {
      dispatch(
        setError(error.response?.data?.message || "Registration failed"),
      );
      throw error; // Rethrow the error to be caught in the component
    } finally {
      dispatch(setLoading(false));
    }
  };
};
export const refreshAccessTokenThunk = () => {
  return async (dispatch) => {
    try {
      console.log("Step 1: Calling refresh");

      const tokenData = await refreshAccessToken();

      console.log("Step 2:", tokenData);

      dispatch(updateAccessToken(tokenData.accessToken));

      console.log("Step 3: Calling profile");

      const profile = await getProfile();

      console.log("Step 4:", profile);

      dispatch(setUser(profile.user));

      console.log("Step 5: User stored");
    } catch (error) {
      console.log("Refresh Error:", error.response);

      dispatch(logOut());
    } finally {
      dispatch(setAuthCheck(true));
    }
  };
};
export const logOutThunk = () => {
  return async (dispatch) => {
    try {
      const data = await logoutUser();
      localStorage.setItem("loggedOut", "true");

      dispatch(logOut());

      console.log("4. Redux Cleared");
    } catch (error) {
      console.log("5. Error", error);
    }
  };
};
