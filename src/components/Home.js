import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="box">
      <h1>Welcome to Strangers Things!</h1>
      <p>
        Don't have an account? Get started{" "}
        <NavLink to="/register">Here!</NavLink>
      </p>
      <p>
        Want to just browse our countless sellers' posts? Click{" "}
        <NavLink to="/posts">Here!</NavLink>
      </p>
    </div>
  );
};

export default Home;
