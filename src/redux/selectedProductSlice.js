  import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "selectedProduct",
  initialState: {
    selectedProductAtual: null,
  },
  reducers: {
    selected_product(state, { payload }) {
      return {
        ...state,
        selectedProductAtual: payload,
      };
    },
  },
});

export const { selected_product } = slice.actions;
export const selectedProductA = (state) => state.selectedProductAtual;
export default slice.reducer;
