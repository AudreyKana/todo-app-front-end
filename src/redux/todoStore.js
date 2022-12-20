import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./authSlice";
import { messageSlice } from "./messageSlice";
import { todoSlice } from "./todoSlice";

export const store = configureStore({
  reducer: {
    tasks: todoSlice.reducer,
    auth: authSlice.reducer,
    message: messageSlice.reducer,
  },
});
