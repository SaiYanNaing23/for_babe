import React from 'react'
import style from '@/components/dashboardpageUI/dashboard.module.css'
import Message from '@/components/messagebox/MessageBox'
import Link from 'next/link'

const sideNavBar = () => {
  return (
    <div>
       <div className={style.sidenav}>
        <ul className={style.items}>
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link href="/explore">Explore</Link>
          </li> 
          <li>
            <Link href="/matches">My Matches</Link>
          </li>
          <li>
            <Message/>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
        <div className={style.profilediv}>
          <Link href="/profile">
            <img src="../../assets/icons/profile.svg" alt="Profile icon" width="50px" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default sideNavBar
