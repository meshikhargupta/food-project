import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Error from "./components/Error.jsx";
import Home from "./components/Home.jsx";
import RestaurantMenu from "./components/RestaurantMenu.jsx";
import Cart from "./components/Cart.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<Error />}>
      <Route path="/" element={<Home />} />
      <Route path="/restaurants/:resId" element={<RestaurantMenu />} />
      <Route path="/cart" element={<Cart />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
