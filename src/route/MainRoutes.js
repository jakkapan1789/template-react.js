import { Outlet } from "react-router-dom";
import MainLayout from "../components/Layout/MainLayout";
import Dashboard from "pages/Dashboard/Dashboard";
import Home from "pages/Home/Home";
import Component from "pages/Component/Component";
import Document from "pages/Document/Document";
import Create from "pages/Document/Create/Create";
const MainRoutes = {
  path: "/",
  element: (
    <MainLayout>
      <Outlet />
    </MainLayout>
  ),
  children: [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "dashboard",
      element: <Dashboard />,
    },
    {
      path: "component",
      element: <Component />,
    },
    {
      path: "document",
      element: <Document />,
    },
    {
      path: "document/create",
      element: <Create />,
    },
  ],
};

export default MainRoutes;
