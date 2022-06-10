import React, { useEffect, useState } from 'react';
import './Banner.css'
import BannerImage1 from '../../../Assets/banner/responsive_web_design.jpg'
import { Link } from 'react-router-dom';
// import BannerImage2 from '../../../Assets/banner/20945204.jpg'
const Banner = () => {
    // const typingText = "Hi"
    // const typingText2 = " I'm a web developer"
    // const typingText3 = <a className="btn btn-accent btn-sm" href='https://drive.google.com/file/d/1QUCiNKKKFk4HJNXVcb-hmEYUPR2TwNkr/view'>Down Load My Resume</a>
    // const [typing, setTyping] = useState('')
    // const [typing2, setTyping2] = useState('')
    // const [typing3, setTyping3] = useState('')
    // useEffect(() => {
    //     setTimeout(() => {
    //         setTyping(typingText)
    //     }, 1000)
    //     setTimeout(() => {
    //         setTyping2(typingText2)
    //     }, 2000)
    //     setTimeout(() => {
    //         setTyping3(typingText3)
    //     }, 3000)
    // }, [])
    return (
        <>
            <div class="hero min-h-screen">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={BannerImage1} class="w-62 lg:max-w-lg rounded-lg shadow-2xl" alt='' />

                    <div className='flex-1'>
                        <h1 class="text-2xl lg:text-5xl font-bold text-orange-500">Responsive Web sites and apps done right..</h1>
                        <p class="py-6 text-white">I am a web developer from Bangladesh.I enjoy building everything from small business to rich interactive web apps.If you are a business seeking a web presence or an employee looking to hire, you can get in touch with me here.</p>
                        <a href='https://drive.google.com/drive/folders/1WJuvXot_0KvdpPs6XRbKjwO8-GxCGd5z' target='_blank' class="btn btn-sm btn-success text-white font-bold">Download resume</a>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Banner;