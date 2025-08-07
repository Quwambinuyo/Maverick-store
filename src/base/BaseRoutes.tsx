import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Categories, Home, Landing, Layout, Pages } from "../components";
import {
  Dashboard,
  Cart,
  Contact,
  About,
  Checkout,
  Error404,
  Register,
} from "../pages";

const router = createBrowserRouter([
  { path: "/", element: <Landing /> },
  {
    path: "",
    element: <Layout />,
    errorElement: <Error404 />,
    children: [
      { path: "/home", element: <Home /> },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/cart", element: <Cart /> },
      { path: "/categories", element: <Categories /> },
      { path: "/pages", element: <Pages /> },
      { path: "/contact", element: <Contact /> },
      { path: "/about", element: <About /> },
      { path: "/checkout", element: <Checkout /> },
    ],
  },
  { path: "register", element: <Register /> },
]);

export default function BaseRoutes() {
  return <RouterProvider router={router} />;
}
