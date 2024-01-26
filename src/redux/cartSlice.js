import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "cart",
  initialState: {
    cartAtual: null,
    productsCart: [],
  },
  reducers: {
    open_cart(state) {
      return {
        ...state,
        cartAtual: true,
      };
    },
    close_cart(state) {
      return {
        ...state,
        cartAtual: false,
      };
    },
    add_product(state, { payload }) {
      const productIsAlreadyInCart = state.productsCart.some(
        (product) => product.id === payload.id
      );

      if (productIsAlreadyInCart) {
        return {
          ...state,
          productsCart: state.productsCart.map((product) =>
            product.id === payload.id
              ? { ...product, quantity: product.quantity + 1 }
              : product
          ),
        };
      }

      return {
        ...state,
        productsCart: [...state.productsCart, { ...payload, quantity: 1 }],
      };
    },

    remove_product(state, { payload }) {
      return {
        ...state,
        productsCart: state.productsCart.filter(
          (product) => product.id !== payload
        ),
      };
    },
    increase_product_quantity(state, { payload }) {
      return {
        ...state,
        productsCart: state.productsCart.map((product) =>
          product.id === payload
            ? { ...product, quantity: product.quantity + 1 }
            : product
        ),
      };
    },
    decrease_product_quantity(state, { payload }) {
      return {
        ...state,
        productsCart: state.productsCart
          .map((product) =>
            product.id === payload
              ? { ...product, quantity: product.quantity - 1 }
              : product
          )
          .filter((product) => product.quantity > 0),
      };
    },
    delete_cart(state) {
      return {
        ...state,
        productsCart: [],
      };
    },
  },
});

export const {
  open_cart,
  close_cart,
  add_product,
  add_product_quantity,
  remove_product,
  increase_product_quantity,
  decrease_product_quantity,
  delete_cart,
} = slice.actions;
export const cart = (state) => state.cartAtual;
export const productsC = (state) => state.productsCart;
export default slice.reducer;
