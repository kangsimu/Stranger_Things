import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = (props) => {
  let navigate = useNavigate();
  const { setToken } = props;
  function clearToken(event) {
    event.preventDefault();
    setToken("");
    localStorage.clear();
    navigate("/home");
  }

  return (
    <button className="btn btn-dark" onClick={clearToken}>
      Log Out
    </button>
  )
};
export default Logout;
