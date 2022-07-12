import React, {useState} from 'react'
import {registerUser} from '../api'

const Register = ({username, password, setUsername, setPassword, setIsLoggedIn}) => {
    async function handleSubmit(event) {
        event.preventDefault()
        const token = await registerUser(username, password)
        if (token) {
            setIsLoggedIn(true);  
            localStorage.setItem("token", token);
            localStorage.setItem("username", username );
            setUsername(username);
            };
    } 
    return (<>
        <div>Register</div>
        <form onSubmit={handleSubmit}>
            <label>
                Create Username Here
                <input
                name='username'
                type='text'
                value={username}
                onChange={(event)=>{
                setUsername(event.target.value)
                }}
                />
            </label>

            <label>
                Create Password Here
                <input
                name='password'
                type='text'
                value={password}
                onChange={(event)=>{
                setPassword(event.target.value)
                }}
                />
            </label>
            <button type='submit'>Create User</button>

            </form>
        </>);
};

export default Register; 