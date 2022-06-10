import React from 'react';
import Cbanner from './Assets/banner/coomingsoon.jpg'
import NavBar from './Pages/NavBar/NavBar';

const Blogs = () => {
    return (
        <div className='flex justify-center items-center flex-col bg-slate-400 h-screen'>
            <img style={{ height: '530px', width: '1000px' }} src={Cbanner} alt="" />
        </div>
    );
};

export default Blogs;