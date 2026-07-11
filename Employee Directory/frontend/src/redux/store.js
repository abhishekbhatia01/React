import { configureStore } from "@reduxjs/toolkit";
import employeeeReducer from "./features/employeeSlice";

export const store = configureStore({
    reducer:{
        employee: employeeeReducer
    }
})
