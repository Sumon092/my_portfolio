import React from 'react';
import './Home.css'
import backgroundImage from '../../Assets/backgroundImage/bg1.jpg'
import NavBar from '../NavBar/NavBar';
import Banner from './Banner/Banner';
import MyProjects from '../Projects/MyProjects/MyProjects';

const Home = () => {
    return (
        <>
            <div className='home h-screen lg:py-5'>
                <NavBar></NavBar>
                <Banner></Banner>
                <MyProjects />
            </div>
        </>

    );
};

export default Home;