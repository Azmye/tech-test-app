import { Navigate } from "react-router-dom";
import { useSelector } from "../redux/store";
import { ReactNode } from "react";

interface AuthGuardProps {
  children: ReactNode;
}

export default function AuthGuard({ children }: AuthGuardProps) {
  const { user } = useSelector((state) => state.auth);

  console.log(user);

  if (!user?.api_token) {
    return <Navigate to={"/login"} />;
  }

  return children;
}
