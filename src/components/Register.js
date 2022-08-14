import React from "react";
import { registerUser } from "../api";
import { useNavigate } from "react-router-dom";

const Register = ({ username, setUsername, password, setPassword }) => {
  const navigate = useNavigate();
  async function handleSubmit(event) {
    event.preventDefault();
    await registerUser(username, password);
    navigate("/login");
  }

  return (
    <>
      <div>Register</div>
      <form onSubmit={handleSubmit}>
        <label>
          Create Username Here
          <input
            name="username"
            type="text"
            value={username}
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
        </label>

        <label>
          Create Password Here
          <input
            name="password"
            type="text"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </label>
        <button type="submit">Create User</button>
      </form>
    </>
  );
};

export default Register;
