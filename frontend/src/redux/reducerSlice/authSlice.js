import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  auth: {},
};

const rootSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,
  reducers: {
    SET_AUTH: (state, action) => {
      state.auth = action.payload;
    },
    LOGOUT: (state, action) => {
      state.auth = {};
    },
  },
});

export const { SET_AUTH, LOGOUT } = rootSlice.actions;
export default rootSlice.reducer;