import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Posts, Profile, Login, Register, Header, AddPosts, Home } from "./index.js";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState("false");
  const [posts, setPosts] = useState("");
  const [myInfo, setMyInfo] = useState("");

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div>
      <Header
        setUsername={setUsername}
        setPassword={setPassword}
        setIsLoggedIn={setIsLoggedIn}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
                 />}
        />
        <Route
          path="/login"
          element={
            <Login
                username={username}
                setUsername={setUsername}
                password={password}
                setPassword={setPassword}
                setIsLoggedIn={setIsLoggedIn}
                myInfo={myInfo} 
                setMyInfo={setMyInfo}
            />
          }
        />
        <Route
          path="/profile"
          element={
            <Profile 
                myInfo={myInfo} 
                setMyInfo={setMyInfo} />}
        />
        <Route
          path="/AddPosts"
          element={
            <AddPosts 
            username={username} 
            setPosts={setPosts} 
            posts={posts} />}
        />
        <Route
          path="/register"
          element={
            <Register
              username={username}
              setUsername={setUsername}
              password={password}
              setPassword={setPassword}
            />
          }
        />
        <Route
          path="/home"
          element={
            <Home
            />
          }
        />
        <Route
          path="/logout"
          element={
            <Login
            />
          }
        />
        <Route
          path="/Posts"
          element={
            <Posts
              posts={posts}
              setPosts={setPosts}
              isLoggedIn={isLoggedIn}
              username={username}
              setMyInfo={setMyInfo}/>}
        />
      </Routes>
    </div>
  );
};

export default App;
