import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "feitoPagamento",
  initialState: {
    CurrentfeitoPagamento: false,
  },
  reducers: {
    ativarPagamento(state) {
      return {
        ...state,
        CurrentfeitoPagamento: true,
      };
    },
    desativarPagamento(state) {
      return {
        ...state,
        CurrentfeitoPagamento: false,
      };
    },
  },
});

export const { ativarPagamento, desativarPagamento } = slice.actions;
export const CurrentfeitoPaga = (state) => state.CurrentfeitoPagamento;
export default slice.reducer;
