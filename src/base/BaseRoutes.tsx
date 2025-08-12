import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
  Categories,
  History,
  Home,
  Landing,
  Layout,
  Pages,
  Products,
  Profile,
} from "../components";
import {
  Dashboard,
  Cart,
  Contact,
  About,
  Checkout,
  Error404,
  Register,
  Login,
  ForgotPassword,
  TermsAndCondition,
  Privacy,
  Faq,
} from "../pages";

import ProtectedRoute from "../base/ProtectedRoutes";

const router = createBrowserRouter([
  { path: "/", element: <Landing /> },
  { path: "register", element: <Register /> },
  { path: "login", element: <Login /> },
  { path: "forgot-password", element: <ForgotPassword /> },

  {
    path: "",
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    errorElement: <Error404 />,
    children: [
      { path: "/home", element: <Home /> },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/cart", element: <Cart /> },
      { path: "/categories", element: <Categories /> },
      { path: "/pages", element: <Pages /> },
      { path: "/contact", element: <Contact /> },
      { path: "/about", element: <About /> },
      { path: "/t&c", element: <TermsAndCondition /> },
      { path: "/privacy", element: <Privacy /> },
      { path: "/checkout", element: <Checkout /> },
      { path: "/profile", element: <Profile /> },
      { path: "/FAQ", element: <Faq /> },
      { path: "/products", element: <Products /> },
      { path: "/history", element: <History /> },
    ],
  },
]);

export default function BaseRoutes() {
  return <RouterProvider router={router} />;
}
