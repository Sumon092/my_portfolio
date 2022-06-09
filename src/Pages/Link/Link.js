import React from 'react';
import { NavLink } from 'react-router-dom';

const Link = (props) => {
    const { name, link } = props.route;
    return (
        <li className='mr-16'>
            <a className='lg:border-b-2 py-2 border-rose-700' href={link}>{name}</a>
            {/* <NavLink href={link}
                to="{'/'}"
                style={isActive => ({
                    color: isActive ? "lg:border-b-2 py-2 border-rose-700" : "blue"
                })}
            >
                {name}
            </NavLink> */}
        </li>
    );
};

export default Link;