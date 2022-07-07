import React from 'react';
import { NavLink } from "react-router-dom"

import './Header.css'

const Header = () => {
    return (
        <div id="nav-bar">
            <h1>Stranger's Things</h1>
            
            <NavLink to = "/posts">POSTS</NavLink>
            <NavLink to = "/profile">PROFILE</NavLink>
            <NavLink to = "/login">LOGIN</NavLink>
            <NavLink to = "/register">REGISTER</NavLink>

        </div>

    )

}

export default Header