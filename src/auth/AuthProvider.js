import { useState, createContext } from "react";
import { clearSession } from "../user/session";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userLogin, setUserLogin] = useState(() =>
    JSON.parse(sessionStorage.getItem("user"))
  );
  const contextValue = {
    userLogin,
    login(id, username, email, posts) {
      setUserLogin({
        id: id,
        username: username,
        email: email,
        posts: posts,
      });
    },
    logout() {
      setUserLogin(null);
      clearSession();
    },
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
export default AuthProvider;
