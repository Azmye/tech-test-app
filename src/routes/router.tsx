import { useRoutes } from "react-router-dom";
import Layout from "../app/Layout";
import Page from "../app/HomePage";
import LoginPage from "../app/auth/LoginPage";
import AuthGuard from "../guards/AuthGuard";
import AboutPage from "../app/about/AboutPage";
import ContactPage from "../app/contact/ContactPage";

export function Router() {
  return useRoutes([
    {
      path: "/",
      element: (
        <AuthGuard>
          <Layout />
        </AuthGuard>
      ),
      children: [
        {
          index: true,
          element: <Page />,
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
        {
          path: "/contact",
          element: <ContactPage />,
        },
      ],
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
  ]);
}
