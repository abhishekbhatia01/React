import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  items: JSON.parse(localStorage.getItem("collection")) || [],
};

const collectionSlice = createSlice({
  name: "collection",
  initialState,
  reducers: {
    addToCollection: (state, action) => {
      const alreadyExists = state.items.find(
        (item) => item.id === action.payload.id,
      );

      if (!alreadyExists) {
        state.items.push(action.payload);
        localStorage.setItem("collection", JSON.stringify(state.items));
      }
    },
    removeFromCollection: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      localStorage.setItem("collection", JSON.stringify(state.items));
    },
    clearCollection: (state) => {
      state.items = [];
      localStorage.removeItem("collection");
    },
    addedToast: () => {
      toast("Added to collection");
    },
    removeToast: () => {
      toast("Removed from collection");
    },
  },
});

export const {
  addToCollection,
  removeFromCollection,
  clearCollection,
  addedToast,
  removeToast,
} = collectionSlice.actions;

export default collectionSlice.reducer;
