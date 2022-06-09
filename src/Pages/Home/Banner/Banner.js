import React, { useEffect, useState } from 'react';
import './Banner.css'
import BannerImage1 from '../../../Assets/banner/responsive_web_design.jpg'
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
            <div class="hero min-h-screen gap-9">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={BannerImage1} class="w-62 lg:max-w-lg rounded-lg shadow-2xl" alt='' />

                    <div className='flex-1'>
                        <h1 class="text-2xl lg:text-5xl font-bold text-orange-500">Hi...
                            <br /><span>I'm a web developer</span></h1>
                        <p class="py-6 text-white">I develope all kind of fully responsive web application like e-commerce, warehouse
                            management, portfolio web site and many more.</p>
                        <button class="btn btn-sm btn-success">Download resume</button>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Banner;