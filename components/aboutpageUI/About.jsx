import React from 'react'
import style from '@/components/aboutpageUI/about.module.css'
import Footer from '@/components/initialpageUI/Footer'
import SideNavBar from '../navbar/sideNavBar'
const About = () => {
  return (
    <div className={style.maindiv}>
        {/* Side Nav bar */}
        <SideNavBar/>

        {/* About Page */}
        <div className={style.contentdiv}>
          <h1 className={style.title}>Our Main Goal</h1>
          <p className={style.text}>We guarantee you to improve your career development 
          <br/>from our mentors' guidance and support <br/>Aiming to contribute positively to society's progress <br/>together with you </p>
          <div className={style.aboutdiv}>
            <div className={style.left}>
              <img src="../../assets/images/guide.svg" alt="Guiding image" width="500px"/>
            </div>
            <div className={style.right}>
              <p className={style.text2}>" Guiding your journey <br/>with the perfect mentor match " </p>
            </div>
          </div>

          <Footer/>
        </div>

      </div>
    
  )
}

export default About
