import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();

  let LS = JSON.parse(localStorage.getItem("userInfo"));
  const [user, setUser] = useState(LS);

  const login = async (payload) => {
    try {
      let { data } = await axios.post(
        "http://localhost:7781/api/users/login",
        payload
      );

      localStorage.setItem("userInfo", JSON.stringify(data));

      setUser(data);

      alert("Login Successful");

      setTimeout(() => {
        navigate("/emps");
      }, 1234);
    } catch (err) {
      console.log("err:", err);
      alert(err.response?.data.message);
    }
  };

  const Signup = async (payload) => {
    console.log("payload:", payload);

    try {
      await axios.post("http://localhost:7781/api/users/register", payload);

      alert("Signup Successful");
      setTimeout(() => {
        // navigate("/");
      }, 1234);
    } catch (err) {
      console.log("err:", err);
      alert(err.response?.data.message);
    }
  };

  const logout = () => {
    localStorage.removeItem("userInfo");
    setUser(null);

    alert("LoggedOut");
  };

  return (
    <AuthContext.Provider value={{ user, login, Signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

export const AuthState = () => {
  return useContext(AuthContext);
};
