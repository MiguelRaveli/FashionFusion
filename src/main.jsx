import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Home from "./pages/Home/index.jsx";
import Compra from "./pages/Compra/index.jsx";
import Login from "./pages/Login/index.jsx";
import "./index.css";

import { createHashRouter, RouterProvider } from "react-router-dom";

import { Provider } from "react-redux";
import { store, persistor } from "./redux/store.js";
import { PersistGate } from "redux-persist/integration/react";
import Carrinho from "./pages/Carrinho/index.jsx";
const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/compra",
        element: <Compra />,
      },
      {
        path: "/carrinho",
        element: <Carrinho />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RouterProvider router={router}>
          <App />
        </RouterProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
