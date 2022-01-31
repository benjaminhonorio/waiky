import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../auth/useAuth";

export default function RedirectUser({ children }) {  
  const auth = useAuth();
  console.log(auth.userLogin);
  return auth.userLogin ? <Navigate to="/profile" /> : children;
}
