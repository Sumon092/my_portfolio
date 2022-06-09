import React from 'react';
import Propic from '../../Assets/skills/propic.png'

const About = () => {
    return (
        <div className='px-24 py-24 aboutContainer'>
            <div className='h-screen border-2 border-solid border-indigo-400'>
                <div style={{ width: '150px', height: '150px' }} className='border-2 border-solid border-indigo-400 rounded-full aboutImage'>
                    <img className='pro-image' src={Propic} alt="" />
                </div>
                <div className='px-8 py-24'>
                    <h4 className='text-xl'>Hi...</h4>
                    <h2 className='text-5xl font-bold font-serif text-orange-500'>I'm Sumon</h2>
                    <p><small>Web developer</small></p>
                    <p className='text-lg'>Web Development, My passion is to create web-based user interactions along with designing and implementing highly responsive user interface components by deploying React concepts. Proficient in translating design and writing application interface code via Javascript and ReactJS workflows. Adept at monitoring and maintaining frontend performance, troubleshooting, and debugging same to bolster overall performance.</p>

                    <p className='text-lg mt-5'> I keen to learn new technologies which are very important as a web developer, actually, I enjoy it and try to apply them to the project. I have learned javascript, React, and basically, MERN stack technology and various technology from different resources.I have done at least 20 projects using those technologies that I have mentioned</p>

                    <h3 className='text-xl mt-5'>I have done BSc in Engineering degree from</h3>
                    <h2 className='text-2xl font-bold text-neutral'>Bangladesh University of Business and Technology</h2>
                    <p><small>Before graduation</small></p>
                    <h3 className='text-xl '>I have done Diploma in Engineering from</h3>
                    <h2 className=' text-2xl font-bold text-neutral'>Sylhet Polytechnic Institute</h2>
                </div>
            </div>
        </div>
    );
};

export default About;