import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "pages",
  initialState: {
    CurrentPage: 1,
  },
  reducers: {
    change_page(state, { payload }) {
      return {
        ...state,
        CurrentPage: payload,
      };
    },
  },
});

export const { change_page } = slice.actions;
export const CurrentP = (state) => state.CurrentPage;
export default slice.reducer;
