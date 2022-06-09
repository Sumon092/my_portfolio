import React from 'react';
import SkillIcon1 from '../../Assets/skills/icons8-javascript-80.png'
import SkillIcon2 from '../../Assets/skills/icons8-react-80.png'
import SkillIcon3 from '../../Assets/skills/icons8-nodejs-80.png'
import SkillIcon4 from '../../Assets/skills/icons8-mongodb-80.png'
import SkillIcon5 from '../../Assets/skills/icons8-html-5-80.png'
import SkillIcon6 from '../../Assets/skills/icons8-css3-80.png'
import SkillIcon7 from '../../Assets/skills/icons8-heroku-80.png'
import SkillIcon8 from '../../Assets/skills/icons8-google-firebase-console-80.png'
import SkillIcon9 from '../../Assets/skills/tailwindcss-icon.svg'
import SkillIcon10 from '../../Assets/skills/icons8-bootstrap-80.png'


const Skill = () => {
    return (
        <div className='px-8 lg:px-48'>
            <h2 className='text-xl text-center font-bold py-3 lg:text-3xl'>Preferred Technologies</h2>
            <div className='skills grid grid-cols-3 lg:grid-cols-5'>
                <img className='transform transition' src={SkillIcon1} alt="" />
                <img src={SkillIcon2} alt="" />
                <img src={SkillIcon3} alt="" />
                <img src={SkillIcon4} alt="" />
                <img src={SkillIcon5} alt="" />
                <img src={SkillIcon6} alt="" />
                <img src={SkillIcon7} alt="" />
                <img src={SkillIcon8} alt="" />
                <img style={{ width: '80px' }} src={SkillIcon9} alt="" />
                <img src={SkillIcon10} alt="" />
            </div>
        </div>
    );
};

export default Skill;