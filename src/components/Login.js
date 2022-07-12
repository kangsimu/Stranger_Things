import React, { useState } from 'react'
import { loginUser } from '../api'
import {useNavigate} from 'react-router-dom'

const Login = ({username, setuserName, password, setPassword, setloggedIn}) => {
    let navigate = useNavigate();
    const handleOnChange = (event) => {
        const input = event.target.id
        if(input === 'username'){
            setUsername(event.target.value)
        }
        else {
            setPassword(event.target.value)
        }
    }
    
    const handleSubmit = async(event) =>{
    
    event.preventDefault()
      const token = await loginUser(username, password)
      token ? setloggedIn(true) : false 
      localStorage.setItem("token", token)
      localStorage.setItem("username", username )
      setUsername(username)
      navigate('/Profile')
    }

    const registerButton = async(event) => {
        event.preventDefault()
        navigate('/Register')
    }
    
    return (
        <div className='box'>{'This is your Login component'}
            <form onSubmit={handleSubmit}>
                <label>Username</label>

                <input
                    id="username"
                    onChange={handleOnChange}
                    placeholder="User Name Here"
                    value={username}
                    />

                <label>Password</label>

                <input
                    id="password"
                    onChange={handleOnChange}
                    placeholder="Password Here"
                    value={password}
                    />
                <button type="submit">Login</button>

            </form>

    </div>)

}

export default Login;