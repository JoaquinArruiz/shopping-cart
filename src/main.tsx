import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { Browse } from "./components/Browse";
import { ItemPage } from "./components/ItemPage";
import { Cart } from "./components/Cart";
import "./index.css";
import { Toaster } from "sonner";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "cart",
    element: <Cart />,
  },
  {
    path: "browse",
    element: <Browse />,
  },
  {
    path: "item/:id",
    element: <ItemPage />,
  },
  {
    path: "about",
    element: <></>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <Toaster />
    <RouterProvider router={router} />
  </Provider>,
);
