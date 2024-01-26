import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "filter",
  initialState: {
    filtroAtual: "geral",
  },
  reducers: {
    select_filter(state, { payload }) {
      return {
        ...state,
        filtroAtual: payload,
      };
    },

    back_to_geral(state) {
      return {
        ...state,
        filtroAtual: "geral",
      };
    },
  },
});

export const { turn_filter_on, turn_filter_off, select_filter, back_to_geral } =
  slice.actions;
export const filter = (state) => state.filtroAtual;
export default slice.reducer;
