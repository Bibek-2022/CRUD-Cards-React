import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../src/pages/LoginSlice.js";
const store = configureStore({
  reducer: {
    login: loginReducer,
  },
});

export default store;
