import { configureStore } from "@reduxjs/toolkit";
import employeesListReducer from "./slices/employeesListSlice";

/**
 * Configure and create the Redux store.
 *
 * @returns {Object} The Redux store instance.
 */
export const store = configureStore({
  reducer: {
    employeesList: employeesListReducer,
  },
});
