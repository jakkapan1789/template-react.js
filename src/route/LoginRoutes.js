import { Outlet } from "react-router-dom";
import Login from "pages/Login/Login";

const LoginRoutes = {
  path: "/",
  element: <Outlet />,
  children: [
    {
      path: "/auth/login",
      element: <Login />,
    },
  ],
};

export default LoginRoutes;
