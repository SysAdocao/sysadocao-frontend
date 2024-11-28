import { createContext, useContext, useState, useEffect } from "react";
import { api } from "@/lib/axios";
import axios, { Axios } from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLogged, setIsLogged] = useState(false);
    const [userName, setUserName] = useState("");
    const [userId, setUserId] = useState("");
    const [userRole, setUserRole] = useState("");
  
    const validateToken = async () => {
      const token = localStorage.getItem("jwtToken");
      if (token) {
        try {
          const response = await api.get("/validate-token", { 
            headers: { Authorization: `Bearer ${token}` },
          });
          setIsLogged(true);
          setUserName(response.data.name);
          setUserId(response.data.id);
          setUserRole(response.data.role);
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
  
    const register = async (name, email, password, role, phone, address) => {
    try {
      await axios({
        method: "post",
        url: "http://localhost:3000/users",
        data: {
          name: name,
          email: email,
          password: password,
          role: role,
          phone: phone,
          address: address,
          // {
          //   "street": "Rua Alguma",
          //   "number": "1231245123",
          //   "neighborhood": "Centro",
          //   "city": "Rio de Janeiro",
          //   "state": "Rio de Janeiro",
          //   "zipCode": "63030-390",
          //   "complement": "Condominio" }
        },
      });
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Cadastro falhou. Tente novamente.";
      throw new Error(errorMessage);
    }
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
      <AuthContext.Provider value={{ isLogged, userName, userId, userRole, handleLogout, login, register }}>
        {children}
      </AuthContext.Provider>
    );
};  

export const useAuth = () => useContext(AuthContext);
