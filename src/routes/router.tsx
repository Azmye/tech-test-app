import { useRoutes } from "react-router-dom";
import Layout from "../app/Layout";
import Page from "../app/HomePage";
import LoginPage from "../app/auth/LoginPage";
import AuthGuard from "../guards/AuthGuard";
import AboutPage from "../app/about/AboutPage";
import ContactPage from "../app/contact/ContactPage";
import ChallengeLayout from "../app/challenge/ChallengeLayout";
import ChallengeDashboardPage from "../app/challenge/dashboard/ChallengeDashboardPage";
import ChallengeProfilePage from "../app/challenge/profile/ChallengeProfilePage";
import ChallengeTransactionPage from "../app/challenge/transaction/ChallengeTransactionPage";
import TransactionDetails from "../app/challenge/transaction/TransactionDetails";

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
      path: "/challenge",
      element: (
        <AuthGuard>
          <ChallengeLayout />
        </AuthGuard>
      ),
      children: [
        {
          index: true,
          path: "/challenge/dashboard",
          element: <ChallengeDashboardPage />,
        },
        {
          path: "/challenge/profile",
          element: <ChallengeProfilePage />,
        },
        {
          path: "/challenge/transaction",
          element: <ChallengeTransactionPage />,
        },
        {
          path: "/challenge/transaction/:id/details",
          element: <TransactionDetails />,
        },
      ],
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
  ]);
}
