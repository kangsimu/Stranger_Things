import React from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = ({loggedIn}) => {
    const navigate = useNavigate()
    function handleUserLogout(){
        loggedIn(false)
        localStorage.removeItem("token");
        navigate('/')
    }
    return (
        <button onClick={handleUserLogout}>Logout</button>
    )
}

export default Logout