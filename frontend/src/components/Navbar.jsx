import React from "react";
import { NavLink } from "react-router-dom";
import { AuthState } from "./context/AuthContextProvider";

const Navbar = () => {
  const { user, logout } = AuthState();

  return (
    <nav>
      <ul>
        <li onClick={() => logout()}>
          <NavLink to="/">{user ? "Logout" : ""}</NavLink>
        </li>
        <li>
          <NavLink to="/signup"> {user ? "" : "SignUp"} </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
