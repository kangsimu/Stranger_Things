import React, {useState} from 'react'
import {registerUser} from '../api'

const Register = (props) => {
    
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

const handleSubmit = async (event) => {
    event.preventDefault();
    const token = await registerUser(username, password);
    localStorage.setItem("token", token);
    console.log(token, "this is register component");
}
    return (<>
        <div>Register</div>
        <form onSubmit={handleSubmit}>
            <label>
                username
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
                Password
                <input
                name='password'
                type='text'
                value={password}
                onChange={(event)=>{
                    setPassword(event.target.value)
                }}
                />
            </label>
            <button type='submit'>Login</button>

            </form>
        </>);
};

export default Register; 