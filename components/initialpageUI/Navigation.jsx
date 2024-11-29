'use client';
import React from 'react'
import style from './nav.module.css'
import { useRouter } from 'next/navigation'

const navigation = () => {
  const router = useRouter()
  return (
    <div className={style.nav}>
      <img src="../../assets/images/main_logo.png" alt="Main Logo" width="100px"/>
      <div className={style.navbuttons}>
        <button onClick={()=> router.push('/login')} className={style.login}>Log In</button>
        <button onClick={()=> router.push('/login/signup')} className={style.getstarted}>Get Started</button>
      </div>
    </div>
  );
}

export default navigation
