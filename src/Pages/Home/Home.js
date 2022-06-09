import React from 'react';
import './Home.css'
import Banner from './Banner/Banner';
import MyProjects from '../Projects/MyProjects/MyProjects';
import Skill from './Skill';
import About from './About';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Skill></Skill>
            <MyProjects />
            <About></About>
        </>

    );
};

export default Home;