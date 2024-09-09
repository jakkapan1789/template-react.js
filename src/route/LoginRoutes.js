import { Outlet } from "react-router-dom";
import Login from "pages/Login/Login";
import NotFound from "pages/NotFound/NotFound";
const LoginRoutes = {
  path: "/",
  element: <Outlet />,
  children: [
    {
      path: "/auth/login",
      element: <Login />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ],
};

export default LoginRoutes;
