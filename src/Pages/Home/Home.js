import React from 'react';
import './Home.css'
import backgroundImage from '../../Assets/backgroundImage/bg1.jpg'
import NavBar from '../NavBar/NavBar';

const Home = () => {
    return (
        <>
            <div className='home h-screen'>
                <NavBar></NavBar>
            </div>
        </>

    );
};

export default Home;