import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Categories, Home, Layout, Pages } from "../components";
import { Dashboard, Cart, Contact, About, Checkout, Error404 } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error404 />,
    children: [
      { index: true, element: <Home /> },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/cart", element: <Cart /> },
      { path: "/categories", element: <Categories /> },
      { path: "/pages", element: <Pages /> },
      { path: "/contact", element: <Contact /> },
      { path: "/about", element: <About /> },
    ],
  },
  {
    path: "/checkout",
    element: <Checkout />, // this route stands alone, not inside Home
  },
]);

export default function BaseRoutes() {
  return <RouterProvider router={router} />;
}
