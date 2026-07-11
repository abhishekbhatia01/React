import { createSlice } from "@reduxjs/toolkit";

const initalState = {
  employees: [],
  department: "All",
  search: "",
  loading: false,
  error: null,
};

const employeeSlice = createSlice({
  name: "employee",
  initialState: initalState,
  reducers: {
    addEmployee: (state, action) => {
      state.employees.push(action.payload);
    },
    setEmployees: (state, action) => {
      state.employees = action.payload;
    },
    updateEmployees: (state, action) => {
      state.employees = state.employees.map((employee) =>
        employee._id === action.payload._id ? action.payload : employee,
      );
    },
    deleteEmployees: (state, action) => {
      state.employees = state.employees.filter(
        (employee) => employee._id !== action.payload,
      );
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setDepartment: (state, action) => {
      state.department = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const {
  addEmployee,
  setEmployees,
  updateEmployees,
  deleteEmployees,
  setSearch,
  setDepartment,
  setLoading,
  setError,
  clearError,
} = employeeSlice.actions;

export default employeeSlice.reducer;
