import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "../components/containers/Filters/filterSlice";
import authReducer from "../components/containers/Auth/authSlice";

export default configureStore({
  reducer: {
    filter: filterReducer,
    auth: authReducer,
  },
});
