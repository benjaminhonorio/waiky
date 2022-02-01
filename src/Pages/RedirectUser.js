import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../auth/useAuth";

export default function RedirectUser({ children }) {
  const auth = useAuth();
  return auth.userLogin ? <Navigate to="/profile" /> : children;
}
