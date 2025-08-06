import { useState } from "react";
import { AuthContext } from "./authContext";


const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    isLoggedIn: false,
    username: '',
  });

  const login = (username) => {
    setAuthState({
      isLoggedIn: true,
      username,
    });
  };

  const logout = () => {
    setAuthState({
      isLoggedIn: false,
      username: '',
    });
  };

  return (
    <AuthContext.Provider value={{ ...authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;