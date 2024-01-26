import filterReducer from "./filterSlice";
import cartReducer from "./cartSlice";
import pageReducer from "./pagesSlice";
import searchReducer from "./searchSlice";
import selectedProductReducer from "./selectedProductSlice";
import imageReducer from "./imageSlice";
import feitoPagamentoReducer from "./feitoPagamentoSlice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "@react-native-async-storage/async-storage";
import { persistStore, persistReducer } from "redux-persist";

const rootReducer = combineReducers({
  filtroAtual: filterReducer,
  showModal: filterReducer,
  cartAtual: cartReducer,
  productsCart: cartReducer,
  CurrentPage: pageReducer,
  CurrentSearch: searchReducer,
  selectedProductAtual: selectedProductReducer,
  CurrentImage: imageReducer,
  CurrentfeitoPagamento: feitoPagamentoReducer,
});
const persistConfig = {
  key: "root",
  storage,
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
