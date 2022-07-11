import React, { useState } from 'react'
import { loginUser } from '../api'
import {useNavigate} from 'react-router-dom'

const Login = ({loggedIn, setloggedIn}) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleOnChange = (event) => {
        const changed = event.target.id
        if (changed === 'username') {
            setUsername(event.target.value)        
        }
        else {
            setPassword(event.target.value)        
    }
}

    const handleSubmit = async (event) => {
        event.preventDefault()
        const token = await loginUser(username, password)
        localStorage.setItem("token", token)
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