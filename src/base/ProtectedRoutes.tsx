import { type ReactNode } from "react";
import { Navigate } from "react-router-dom";
import Spinner from "../utils/spinner";
import { useAuthStore } from "../features/useAuthStore";

interface ProtectedRouteProps {
  children: ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { loggedIn, checkingStatus } = useAuthStore();

  if (checkingStatus) {
    return <Spinner />;
  }

  return loggedIn ? children : <Navigate to="/login" />;
}
