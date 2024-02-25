
import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useLocalStorage("token", null);
  const [data,setData] =useLocalStorage("user",null);
  const navigate = useNavigate();

  // call this function when you want to authenticate the user
  const login = async (data) => {
    setToken(data["token"]);
    setData(data);
    navigate("/home");
  };

  // call this function to sign out logged in user
  const logout = () => {
    setToken(null);
    setData(null);
    navigate("/login", { replace: true });
  };

  const value = useMemo(
    () => ({
      data,
      token,
      login,
      logout,
    }),
    [token]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};