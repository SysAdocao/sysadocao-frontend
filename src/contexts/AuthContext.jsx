import { createContext, useContext, useState, useEffect } from "react";
import { api } from "@/lib/axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLogged, setIsLogged] = useState(false);
    const [userName, setUserName] = useState("");
  
    const validateToken = async () => {
      const token = localStorage.getItem("jwtToken");
      if (token) {
        try {
          const response = await api.get("/validate-token", { 
            headers: { Authorization: `Bearer ${token}` },
          });
          setIsLogged(true);
          setUserName(response.data.name);
        } catch {
          setIsLogged(false);
          localStorage.removeItem("jwtToken");
        }
      }
    };
  
    const login = async (token) => {
      localStorage.setItem("jwtToken", token);
      await validateToken(); // Valida o token e atualiza o estado global
    };
  
    const handleLogout = () => {
      localStorage.removeItem("jwtToken");
      setIsLogged(false);
      setUserName("");
    };
  
    useEffect(() => {
      validateToken();
    }, []);
  
    return (
      <AuthContext.Provider value={{ isLogged, userName, handleLogout, login }}>
        {children}
      </AuthContext.Provider>
    );
};  

export const useAuth = () => useContext(AuthContext);
