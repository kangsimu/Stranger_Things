import React, { useState } from "react";
import { loginUser } from "../api";
import { NavLink, useNavigate } from "react-router-dom";

const Login = ({
  username,
  setUsername,
  password,
  setPassword,
  setIsLoggedIn,
}) => {
  const navigate = useNavigate();
  const handleOnChange = (event) => {
    const input = event.target.id;
    if (input === "username") {
      setUsername(event.target.value);
    } else {
      setPassword(event.target.value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = await loginUser(username, password);
    token ? setIsLoggedIn(true) : false;
    localStorage.setItem("user", token);
    setUsername(username);
    navigate("/Profile");
  };

  return (
    <div className="box">
      {"Login"}
      <form onSubmit={handleSubmit}>
        <label>Username</label>

        <input
          id="username"
          onChange={handleOnChange}
          placeholder="User Name Here"
          value={username}
        />

        <label>Password</label>

        <input
          id="password"
          type="password"
          onChange={handleOnChange}
          placeholder="Password Here"
          value={password}
        />
        <button type="submit">Login</button>

        <NavLink to={"/register"}>
          Don't have an account? Register here!
        </NavLink>
      </form>
    </div>
  );
};

export default Login;
