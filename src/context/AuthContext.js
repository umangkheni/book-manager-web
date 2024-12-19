import axios from "axios";
import { createContext, useContext, useState } from "react";
import { toast } from 'react-toastify';
import dotenv from 'dotenv';
dotenv.config();

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 404) {
      toast.error("Request failed with status code 404");
    } else if (error.response.status === 401) {
      toast.error("Invalid credentials");
    } else if (error.response.status === 409) {
      toast.error("User already exists");
    } else {
      toast.error("An unexpected error occurred");
    }
    return Promise.reject(error);
  }
);

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(typeof window !== 'undefined' ? localStorage.getItem("token") : null);

    const login = async (email, password) => {
        try {
            const { data } = await axios.post(`${process.env.SERVER_URL}/api/auth/login`, { email, password });
            localStorage.setItem("token", data.data.token);
            setUser({ email });
            toast.success("Login successful");
        } catch (err) {
            toast.error(err.response.data.message);
            throw new Error(err.response.data.message);
        }
    };

    const register = async (email, password) => {
        try {
            const { data } = await axios.post(`${process.env.SERVER_URL}/api/auth/register`, { email, password });
            
            localStorage.setItem("token", data.data.token);
            setUser({ email });
            toast.success("Registration successful");
        } catch (err) {
            toast.error(err.response.data.message);
            throw new Error(err.response.data.message);
        }
    };

    const logout = () => {
        localStorage.removeItem("token");
        setUser(null);
        toast.success("Logged out successfully");
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
