import React from 'react'
import {Routes, Route} from "react-router-dom"
import {Posts, Profile, Login, Register, Header} from "./"

const App = () => {
    return (
        <>
        <NavBar />
            <Routes>
            <Route path='/' element={<div>Landing Page</div>} />
            <Route path='/login' element={<Login />} />
            <Route  path="/profile"
                    element={<Profile />
            } />
            <Route path='/register' element={<Register />} />
            </Routes>
        </>
    )
}

export default App