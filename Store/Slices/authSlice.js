import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  token: "",
};
const authSlice = createSlice({
  initialState,
  name: "authSlice",
  reducers: {
    login: (state, action) => {
      state.token = action.payload;
    },
    logout: (state) => {
      state.token = null;
    },
  },
});
export default authSlice.reducer;
export const { login, logout } = authSlice.actions;
