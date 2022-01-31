import { useState, createContext } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userLogin, setUserLogin] = useState(
    JSON.parse(sessionStorage.getItem("jwt"))
  );

  const contextValue = {
    userLogin,
    login(token, username) {
      setUserLogin({
        token: token,
        username: username,
      });
    },
    logout() {
      setUserLogin(null);
    },
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
export default AuthProvider;
