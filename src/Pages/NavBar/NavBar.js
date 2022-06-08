import React, { useState } from 'react';

import { MenuIcon, XIcon } from '@heroicons/react/solid';
import Link from '../Link/Link';


const NavBar = (props) => {
    const [open, setOpen] = useState(false);

    const routes = [{ name: 'Home', id: 0, link: '/home' },
    { name: 'Shop', id: 1, link: '/product' },
    { name: 'Deals', id: 2, link: '/Deals' },
    { name: 'About', id: 3, link: '/About' },
    { name: 'Contact', id: 4, link: '/contact' }]


    return (
        <nav className='text-white font-bold'>
            <div onClick={() => setOpen(!open)} className='w-6 h-6 md:hidden'>
                {
                    open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>
                }
            </div>
            <ul className={`md:flex justify-center md:static w-full absolute duration-500 ease-in  ${open ? 'top-6' : 'top-[-134px]'}`}>
                {
                    routes.map(route =>
                        <Link
                            key={route.id}
                            route={route}>
                        </Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;