import { createBrowserRouter } from "react-router-dom";
import Home from "../components/containers/Home";
import Sell from "../components/containers/Sell";
import Login from "../components/containers/Login";
import Register from "../components/containers/Register";
import ProductFilterRoute from "../components/containers/ProductFilterRoute";
import LocationFilterRoute from "../components/containers/LocationFilterRoute";
import FilterRoute from "../components/containers/FilterRoute";
import PriceFilterRoute from "../components/containers/PriceFilterRoute";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/sell",
    element: <Sell />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/filter",
    element: <FilterRoute />,
    children: [
      {
        path: "",
        element: <LocationFilterRoute />,
      },
      {
        path: "product",
        element: <ProductFilterRoute />,
      },
      {
        path: "price",
        element: <PriceFilterRoute />,
      },
    ],
  },
]);
