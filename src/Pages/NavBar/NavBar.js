import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './NavBar.css'





const NavBar = () => {
    const [navBar, setNavBar] = useState(false);
    const changeBackground = () => {
        if (window.scrollY >= 60) {
            setNavBar(true)
        } else {
            setNavBar(false)
        }
    }
    window.addEventListener('scroll', changeBackground);

    return (
        <div className={navBar ? 'navBar active z-50' : 'navBar z-50 mt-[-80px]'}>
            <div className="text-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'>HOME</Link></li>
                        <li><Link to='/myProjects'>MY PROJECTS</Link></li>
                        <li><Link to='/contact'>CONTACT</Link></li>
                        <li><Link to='/about'>ABOUT</Link></li>
                        <li><Link to='/blogs'>BLOGS</Link></li>
                    </ul>
                </div>
                {/* <a className="text-xl">Home</a> */}
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0 font-bold">
                    <li>
                        <NavLink to='/home' className={({ isActive }) => isActive ? 'text-warning' : 'white'}>HOME</NavLink>
                    </li>
                    <li>
                        <NavLink to='/myProjects' className={({ isActive }) => isActive ? 'text-warning' : 'white'}>MY PROJECTS</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact' className={({ isActive }) => isActive ? 'text-warning' : 'white'}>CONTACT</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about' className={({ isActive }) => isActive ? 'text-warning' : 'white'}>ABOUT</NavLink>
                    </li>
                    <li>
                        <NavLink to='/blogs' className={({ isActive }) => isActive ? 'text-warning' : 'white'}>BLOGS</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;