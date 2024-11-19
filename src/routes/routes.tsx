import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/Homepage";
import AuthLayout from "../layouts/AuthLayout";
import Loginpage from "../pages/auth/LoginPage";
import SignupPage from "../pages/auth/SignupPage";

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
        path: "login",
        element: <Loginpage />,
      },
      {
        path: "signup",
        element: <SignupPage />,
      },
    ],
  },
  {
    path: "*",
    element: <div>Not Found</div>,
  },
]);

export default routes;
