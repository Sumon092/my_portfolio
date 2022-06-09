import React from 'react';
import { NavLink } from 'react-router-dom';

const Link = (props) => {
    const { name, link } = props.route;
    return (
        <li className='mr-16'>
            <a className='lg:border-b-4 py-2 border-orange-400' href={link}>{name}</a>
        </li>
    );
};

export default Link;