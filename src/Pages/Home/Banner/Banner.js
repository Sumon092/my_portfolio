import React, { useEffect, useState } from 'react';
import './Banner.css'
const Banner = () => {
    const typingText = "Hi"
    const typingText2 = " I'm a web developer"
    const typingText3 = <a className="btn btn-accent btn-sm" href='https://drive.google.com/file/d/1QUCiNKKKFk4HJNXVcb-hmEYUPR2TwNkr/view'>Down Load My Resume</a>
    const [typing, setTyping] = useState('')
    const [typing2, setTyping2] = useState('')
    const [typing3, setTyping3] = useState('')
    useEffect(() => {
        setTimeout(() => {
            setTyping(typingText)
        }, 1000)
        setTimeout(() => {
            setTyping2(typingText2)
        }, 2000)
        setTimeout(() => {
            setTyping3(typingText3)
        }, 3000)
    }, [])
    return (
        <>
            <div className="px-36">
                <div className='blinking-cursor mt-10 text-5xl text-white text-left'>
                    {typing}
                </div>
                <div className='blinking-cursor text-5xl text-yellow-400 text-left mt-0 mb-5'>
                    {typing2}
                </div>
                {typing3}
            </div>
        </>

    );
};

export default Banner;