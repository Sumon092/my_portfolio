import React from 'react';
import { Link } from 'react-router-dom';





const NavBar = () => {

    const menuItems = <>
        <li><Link id='' to='/'>HOME</Link></li>
        <li><Link href='home#myProjects' to='/myProjects'>MY PROJECTS</Link></li>
        <li><Link to='/contact'>CONTACT</Link></li>
        <li><Link to='/about'>ABOUT</Link></li>
        <li><Link to='/blogs'>BLOGS</Link></li>

    </>
    return (
        <div className='sticky top-0 z-50'>
            <div className="navbar text-white font-bold px-12 text-center m-auto">
                <div className="navbar-start text-center">
                    <div className="dropdown text-center">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <p className='text-black'> {menuItems}</p>
                        </ul>
                    </div>
                    {/* <a className="text-xl">Home</a> */}
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;