import { Navigate } from "react-router-dom";
import { useAuthStore } from "../features/useAuthStore";
import { toast } from "react-toastify";
import { useEffect, type ReactNode } from "react";

interface ProtectedRouteProps {
  children: ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { user } = useAuthStore();

  // useEffect(() => {
  //   if (!user) {
  //     toast.warn("Please login");
  //   }
  // }, [user]);

  // if (!user) {
  //   return <Navigate to="/login" replace />;
  // }

  return <>{children}</>;
}
