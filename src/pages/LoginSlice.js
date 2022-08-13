import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const LoginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLogin: (state, { payload = {} }) => {
      state.login = payload;
    },
  },
});

const { reducer, actions } = LoginSlice;
export const { setLogin } = actions;
export default reducer;
