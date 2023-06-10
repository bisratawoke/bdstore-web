import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    current: {
      location: "Anywhere",
      category: "Everything",
      min_price: null,
      max_price: null,
    },
  },
  reducers: {
    setCurrentLocationFilter: (state, action) => {
      return {
        ...state,
        current: { ...state.current, location: action.payload },
      };
    },
    setCurrentProductCategory: (state, action) => {
      state.current.category = action.payload;
    },
    setCurrentFilter: (state, action) => {
      console.log(action.payload);
      state.current = action.payload;
    },
  },
});

export const {
  setCurrentLocationFilter,
  setCurrentFilter,
  setCurrentProductCategory,
} = filterSlice.actions;

export default filterSlice.reducer;
