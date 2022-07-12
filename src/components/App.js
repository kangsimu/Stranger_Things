import React, { useState, useEffect} from 'react'
import {Routes, Route} from "react-router-dom"
import {Posts, Profile, Login, Register, Header, AddPosts} from "./index.js"

const App = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState("");
    const [posts, setPosts] = useState("");
    const [myInfo, setMyInfo] = useState("");

    useEffect (() => {
        if(localStorage.getItem("token")){
            setIsLoggedIn(true)
        }
    },[])
    
    return (
        <>
        <Header 
            setUsername={setUsername}
            setPassword={setPassword}
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
            
        />
            <Routes>
            <Route path='/' element={<div>Landing Page</div>} />
            <Route path='/login' element={<Login />} />
            <Route  path="/profile"
                    element={<Profile />
            } />
            <Route
                path='/AddPosts'
                element={
                <AddPosts
                    username={username}
                    setPosts={setPosts}
                    posts={posts} />}
                />
            <Route 
                path='/register' 
                element={
                <Register
                    username={username}
                    setUsername={setUsername}
                    password={password}
                    setPassword={setPassword}
                    setIsLoggedIn={setIsLoggedIn} />} 
                />
            
            <Route 
            path='/Posts' 
                element={<Posts 
                    posts={posts}
                    setPosts={setPosts}
                    isLoggedIn={isLoggedIn}
                    username={username}/>} 
                />
            </Routes>

            
        </>
    )
}

export default App