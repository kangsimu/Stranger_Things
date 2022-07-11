import React from 'react'
import {Routes, Route} from "react-router-dom"
import {Posts, Profile, Login, Register, Header} from "./"

const App = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loggedIn, setloggedIn] = useState("");
    

    return (
        <>
        <Header />
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