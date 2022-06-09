import React from 'react';
import NavBar from '../../NavBar/NavBar';
import './MyProjects.css'

const MyProjects = () => {
    return (
        <div className='myProjects lg:py-5'>
            <NavBar></NavBar>
            <h2 className="text-5xl mt-14">Those are My Projects</h2>
        </div>
    );
};

export default MyProjects;