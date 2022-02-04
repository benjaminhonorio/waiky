import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../auth/useAuth";

export default function PrivateRoute({ children }) {
  const auth = useAuth();
  const { userLogin } = auth;

  return userLogin?.username ? children : <Navigate to="/login" />;
}
