import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

export const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    setMessage: (state, action) => {
      return action.payload;
    },
    clearMessage: () => {
      return "";
    },
  },
});

export const { setMessage, clearMessage } = messageSlice.actions;
