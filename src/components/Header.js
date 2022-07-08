import React from 'react';
import { Link } from "react-router-dom"

import './Header.css'

const Header = (props) => {
    return (
        <div className = "box">
            
            <h1>Stranger's Things</h1>
            
            <Link to = "/posts">POSTS</Link>
            <Link to = "/profile">PROFILE</Link>
            <Link to = "/login">LOGIN</Link>
            <Link to = "/register">REGISTER</Link>

        </div>

    )

}

export default Header