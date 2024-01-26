import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "search",
  initialState: {
    CurrentSearch: null,
  },
  reducers: {
    search_product(state, { payload }) {
      return {
        ...state,
        CurrentSearch: payload,
      };
    },
    clean_search(state) {
      return {
        ...state,
        CurrentSearch: null,
      };
    },
  },
});

export const { search_product, clean_search } = slice.actions;
export const CurrentS = (state) => state.CurrentSearch;
export default slice.reducer;
