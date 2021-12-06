import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'

const Nav = () => {
    return (
        <>
            <div className="nav_bar">
                <div className="logo">
                    <Link to="/"><h4><span>React</span> Developer</h4></Link>
                </div>
                <div className="menu">
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                        <li><Link to='/contact'>Contact us</Link></li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Nav;