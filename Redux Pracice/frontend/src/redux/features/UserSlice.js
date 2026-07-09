import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  number: "",
  users: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setNumber: (state, action) => {
      state.number = action.payload;
    },
    clearForm: (state) => {
      state.name = "";
      state.number = "";
    },
    setUsers: (state, action) => {
      state.users = action.payload;
    }
  },
});

export const { setName, setNumber, clearForm, setUsers } = userSlice.actions;
export default userSlice.reducer;
