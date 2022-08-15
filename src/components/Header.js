import React from "react";
import { NavLink } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <div id="nav-bar">
      <NavLink to="/home"><h1>Stranger's Things</h1></NavLink>

      <NavLink to="/posts">POSTS</NavLink>
      <NavLink to="/profile">PROFILE</NavLink>
      <NavLink to="/register">REGISTER</NavLink>
      <NavLink to="/login">LOGIN</NavLink>
      <NavLink to="/logout">LOGOUT</NavLink>
    </div>
  );
};

export default Header;
