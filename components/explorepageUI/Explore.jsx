"use client"
import React, { useState } from 'react'
import style from '@/components/explorepageUI/explore.module.css'
import SideNavBar from '../navbar/sideNavBar'

const Explore = () => {
  const [toggle, setToggle ] = useState(1)
  const toggleTab = (index) =>{
    setToggle(index)
    console.log(toggle)
  }
  return (
    <div className={style.maindiv}>
        {/* Side Navbar */}
        <SideNavBar/>

        {/* Explore Page */}
        <div className={style.contentdiv}> 
            <h1 className={style.maintitle}>Explore mentors !</h1>
            <input className={style.searchbar} type="text" placeholder="Search"></input>

            <div className='mt-[50px] mb-[200px]'>
              <div>
                <ul className={style.titlelist}>
                  <li className={toggle == 1 ? style.titleactive : style.title} onClick={() => toggleTab(1)} >Information Technology</li>
                  <li className={toggle == 2 ? style.titleactive : style.title} onClick={() => toggleTab(2)} >Healthcare</li>
                  <li className={toggle == 3 ? style.titleactive : style.title} onClick={() => toggleTab(3)} >Engineering</li>
                  <li className={toggle == 4 ? style.titleactive : style.title} onClick={() => toggleTab(4)} >Business and Finance</li>
                  <li className={toggle == 5 ? style.titleactive : style.title} onClick={() => toggleTab(5)} >Art and Design</li>
                </ul>
              </div>
            </div>   
        </div>
    </div>
  )
}

export default Explore
