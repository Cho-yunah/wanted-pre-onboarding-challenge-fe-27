import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/Homepage";
import AuthLayout from "../layouts/AuthLayout";
import Authpage from "../pages/auth/AuthPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "",
        element: <Authpage />,
      },
    ],
  },
  {
    path: "*",
    element: <div>Not Found</div>,
  },
]);

export default routes;
