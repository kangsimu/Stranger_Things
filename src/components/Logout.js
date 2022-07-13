import React from "react";
import { NavLink } from "react-router-dom";

const Logout = ({ setIsLoggedIn }) => {
  function handleUserLogout() {
    setIsLoggedIn(false);
  }
  const username = localStorage.getItem("username");

  return (
    <>
      <h1 className="logoutTitle">Are you sure you want to log out of:</h1>
      <h2 className="logoutUser">{username}?</h2>
      <NavLink to="/" className="returnHome">
        -Return Home-
      </NavLink>
      <NavLink to="/Posts" className="returnPosts">
        -Return to Posts-
      </NavLink>
      <button onClick={handleUserLogout} className="logoutButton">
        Logout
      </button>
    </>
  );
};
export default Logout;
