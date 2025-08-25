// src/base/BaseRoutes.tsx
import { useEffect } from "react";
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
  Search,
  SIngleCategory,
  SingleProduct,
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
import { useAuthStore } from "../features/useAuthStore";

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

      { path: "/search", element: <Search /> },

      { path: "/dashboard", element: <Dashboard /> },
      { path: "/cart", element: <Cart /> },
      { path: "/categories", element: <Categories /> },
      {
        path: "/categories/:category/:subCategory?",
        element: <SIngleCategory />,
      },
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
      { path: "/singleproduct/:id", element: <SingleProduct /> },
    ],
  },
]);

export default function BaseRoutes() {
  const { initAuth } = useAuthStore();

  useEffect(() => {
    initAuth();
  }, [initAuth]);

  return <RouterProvider router={router} />;
}
