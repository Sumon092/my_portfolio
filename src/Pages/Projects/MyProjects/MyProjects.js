import React from 'react';
import NavBar from '../../NavBar/NavBar';
import './MyProjects.css'
import Project1 from '../../../Assets/cardaddy/cardaddy.jpeg'
import Project2 from '../../../Assets/kitchen/kitchenhome.jpeg'
import Project3 from '../../../Assets/Autoroyal/autoroyalhome.jpeg'

const MyProjects = () => {
    return (
        <>
            <h2 className='text-5xl text-center text-neutral font-bold mb-8'>My projects</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 px-24 h-screen'>
                <div className='border-solid border-2 border-indigo-400 p-3 rounded-md shadow-lg relative'>
                    <img className='h-screen w-full' src={Project1} alt="" />
                    <div className='text-center'>
                        <h2 className='text-3xl font-bold text-orange-500'>Car Daddy</h2>
                        <p className='mb-5'>Car parts manufacturing web application</p>
                        <button className='btn-sm btn-success w-full border-0 text-white bottom-0 right-0 absolute border-t-0 font-bold btn'>Show Details</button>
                    </div>
                </div>
                <div className='w-full border-solid border-2 border-indigo-400 rounded-md shadow-lg relative'>
                    <img className='h-screen w-full' src={Project3} alt="" />
                    <div className='text-center'>
                        <h2 className='text-3xl font-bold text-orange-500'>Auto Royal</h2>
                        <p className=''>Car dealer web application</p>
                        <button className='btn-sm btn-success w-full border-0 text-white bottom-0 right-0 absolute border-t-0 font-bold btn'>Show Details</button>
                    </div>
                </div>
                <div className='border-solid border-2 border-indigo-400 rounded-md shadow-lg relative'>
                    <img className='h-screen' src={Project2} alt="" />
                    <div className='text-center'>
                        <h2 className='text-3xl font-bold text-orange-500'>Monisha's Kitchen</h2>
                        <p className=''>Catering service web application</p>
                        <button className='btn-sm btn-success w-full border-0 text-white bottom-0 right-0 absolute border-t-0 font-bold btn'>Show Details</button>
                    </div>
                </div>

            </div>
        </>
    );
};

export default MyProjects;