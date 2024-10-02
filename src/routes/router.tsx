import { useRoutes } from "react-router-dom";
import Layout from "../app/Layout";
import Page from "../app/Page";
import LoginPage from "../app/auth/login-page";

export function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Page />,
        },
      ],
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
  ]);
}
