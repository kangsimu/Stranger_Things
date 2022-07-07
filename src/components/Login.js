import React, { useState } from 'react'
import { loginUser } from '../api'

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    let localToken = '';

    async function handleSubmit(event) {
        event.preventDefault()
        const loginSuccess = await loginUser(username, password)
    }
    return <div>
        
        <h2>Login</h2>
        
        <input 
        name = 'username'
        type = 'text'
        value = {username}
        onChange = {(event) => {
            setUsername(event.target.value)
        }}
        />
        <input
        name = 'password'
        type = 'text'
        value = {password}
        onChange = {(event) => {
            setPassword(event.target.value)
        }}
        />
        <button id='submit'>Login</button>

    </div>
}

export default Login