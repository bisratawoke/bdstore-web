import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "../components/containers/Filters/filterSlice";
export default configureStore({
  reducer: {
    filter: filterReducer,
  },
});
