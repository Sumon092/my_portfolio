import React from 'react';
import NavBar from '../../NavBar/NavBar';
import './MyProjects.css'
import Project1 from '../../../Assets/cardaddy/home.PNG'

const MyProjects = () => {
    return (
        <>
            <h2 className='text-5xl text-center text-neutral font-bold'>My projects</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 px-24 py-24'>
                <div className='bg-gray-500 p-3 rounded-md shadow-lg relative'>
                    <img src={Project1} alt="" />
                    <div className='mt-5 text-center text-white'>
                        <h2 className='text-3xl font-bold'>Car Daddy</h2>
                        <p className=''>Car parts manufacturing web application</p>
                        <button className='btn-sm btn-success w-full mt-5 border-0 text-white bottom-0 right-0 absolute border-t-0 font-bold btn'>Show Details</button>
                    </div>
                </div>
                <div className='bg-gray-500 p-3 rounded-md shadow-lg relative'>
                    <img src={Project1} alt="" />
                    <div className='mt-5 text-center text-white'>
                        <h2 className='text-3xl font-bold'>Car Daddy</h2>
                        <p className=''>Car parts manufacturing web application</p>
                        <button className='btn-sm btn-success w-full mt-5 border-0 text-white bottom-0 right-0 absolute border-t-0 font-bold btn'>Show Details</button>
                    </div>
                </div>
                <div className='bg-gray-500 p-3 rounded-md shadow-lg relative'>
                    <img src={Project1} alt="" />
                    <div className='mt-5 text-center text-white'>
                        <h2 className='text-3xl font-bold'>Car Daddy</h2>
                        <p className=''>Car parts manufacturing web application</p>
                        <button className='btn-sm btn-success w-full mt-5 border-0 text-white bottom-0 right-0 absolute border-t-0 font-bold btn'>Show Details</button>
                    </div>
                </div>

            </div>
        </>
    );
};

export default MyProjects;