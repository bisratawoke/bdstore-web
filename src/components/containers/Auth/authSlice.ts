import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    showAuthenticationPage: false,
    showProductSellingPortal: false,
  },
  reducers: {
    authenticate: (state) => {
      state.isAuthenticated = true;
    },
    showProductSellingPortal: (state) => {
      state.showAuthenticationPage = true;
    },
    logout: (state) => {
      state.isAuthenticated = false;
    },
  },
});

export const { authenticate, logout } = authSlice.actions;
export default authSlice.reducer;
