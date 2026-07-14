import { configureStore } from "@reduxjs/toolkit";
import employeeeReducer from "./features/employeeSlice";
import authReducer from "./features/authSlice"; 

export const store = configureStore({
    reducer:{
        employee: employeeeReducer,
        auth: authReducer
    }
})
