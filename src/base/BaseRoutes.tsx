import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "../components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

const BaseRoutes = () => {
  return <RouterProvider router={router} />;
};

export default BaseRoutes;
