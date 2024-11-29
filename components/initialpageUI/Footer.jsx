import React from 'react'
import style from '@/components/initialpageUI/footer.module.css'

const Footer = () => {
  return (
    <div className={style.maindiv}>
        <h1 className={style.copyright}>&copy; Copyright by MentorMatch 2024</h1>
        <div className={style.icons}>
          <a href="https://www.facebook.com/" target="_blank"><img src="../../assets/icons/facebook.svg" alt="Facebook icon"/></a>
          <a href="https://instagram.com" target="_blank"><img src="../../assets/icons/instagram.svg" alt="Instagram icon" /></a>
          <a href="https://mm.linkedin.com" target="_blank"><img src="../assets/icons/linkedin.svg" alt="LinkedIn icon" /></a>
          <a href="https://youtube.com" target="_blank"><img src="../../assets/icons/youtube.svg" alt="Youtube icon" /></a>
        </div>
    </div>
  ) 
}

export default Footer
