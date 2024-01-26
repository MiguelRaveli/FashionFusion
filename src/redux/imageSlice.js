import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "image",
  initialState: {
    CurrentImage: "",
  },
  reducers: {
    change_image(state, { payload }) {
      return {
        ...state,
        CurrentImage: payload,
      };
    },
  },
});

export const { change_image } = slice.actions;
export const CurrentI = (state) => state.CurrentImage;
export default slice.reducer;
