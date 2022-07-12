import React, { useState, useEffect} from 'react'
import {Routes, Route} from "react-router-dom"
import {Posts, Profile, Login, Register, Header, AddPosts} from "./"

const App = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loggedIn, setloggedIn] = useState("");
    const [posts, setPosts] = useState("");
    const [token, setToken] = useState("");

    useEffect (() => {
        if(localStorage.getItem("token")){
            setloggedIn(true)
        }
    },[])
    
    return (
        <>
        <Header 
        loggedIn={loggedIn}
        setloggedIn={setloggedIn}
        setUsername={setUsername}
        setPassword={setPassword}
        />
            <Routes>
            <Route path='/' element={<div>Landing Page</div>} />
            <Route path='/login' element={<Login />} />
            <Route  path="/profile"
                    element={<Profile />
            } />
            <Route path='/register' element={<Register />} />
            <Route path='/Posts' 
                element={
                    <Posts 
                    loggedIn={loggedIn}/>} />
            </Routes>

            
        </>
    )
}

export default App