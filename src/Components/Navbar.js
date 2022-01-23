import React, { useState } from "react";
import logo from '../Images/progress.PNG';
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div>  <div className="navbar">
            <div className="logo">
                <img style={{ width: '5rem', marginRight: '1rem' }} src={logo} alt="logo" />
                <div>
                    <h1 style={{ color: '#173d6a' }}>Your Progress</h1>
                    <p style={{ color: '#2e5079' }}>IELTS Academic</p>
                </div>
            </div>
            <div className="nav_routes">
                <ul>
                    <NavLink activeClassName="active" className="nav_link" to="/"><li>Listening</li></NavLink>
                    <NavLink className="nav_link" to="/reading"><li>Reading</li></NavLink>
                    <NavLink className="nav_link" to="/writing"><li>Writing</li></NavLink>
                    <NavLink className="nav_link" to="/speaking"><li>Speaking</li></NavLink>
                </ul>

            </div>

        </div>
            <hr style={{marginRight:'10px', marginLeft:'10px'}}></hr>
        </div>
    )
}

export default Navbar;