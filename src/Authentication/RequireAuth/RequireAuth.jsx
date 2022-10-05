import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";
import auth from "../Firebase/Firebase.config";

export default function RequireAuth({ children }) {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();

  if (loading) {
    return <Loading />;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  return children;
}
