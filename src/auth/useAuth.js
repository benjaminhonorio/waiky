import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

export default function useAuth() {
  const contextValue = useContext(AuthContext);
  return contextValue;
}
