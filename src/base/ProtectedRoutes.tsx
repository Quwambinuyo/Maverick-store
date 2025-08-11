import { Navigate } from "react-router-dom";
import { useAuthStore } from "../features/useAuthStore";
import { toast } from "react-toastify";
import { useEffect, type ReactNode } from "react";

export default function ProtectedRoute({ children }: { children: ReactNode }) {
  const { user } = useAuthStore();

  useEffect(() => {
    if (!user) {
      toast.warn("Please login");
    }
  }, [user]);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
