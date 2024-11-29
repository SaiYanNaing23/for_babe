'use client'
// import React from 'react'
import { useEffect, useState } from "react"
import style from "@/components/loginpageUI/signup.module.css"
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useAuthStore } from "@/store/auth"


const Signup = () => {
  const { user } = useAuthStore()
  const router = useRouter()
  useEffect(()=> {
    if(user){
      router.push('/buildingprofile')
      return
    }
  },[user])
  const [ username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShowPw, setIsShowPw] = useState(false);
  const { isSignUp, signup } = useAuthStore()

  const onSubmitSignUpHandler = async (e) =>{
    e.preventDefault();
    signup({username, email, password})
  }

  const showPassword = () =>{
    setIsShowPw(!isShowPw)
  }

  return (
    <div className={style.wholediv}>

        <div className={style.maindiv}>
          <div className={style.leftdiv}>
            <img src="../../assets/images/login_img1.svg" alt="SignUp Image" width="400px"/>
          </div>
          <div className={style.rightdiv}>
            <h1 className={style.title}>Sign Up</h1>

            <form className={style.form} onSubmit={onSubmitSignUpHandler} >

              <label htmlFor="email" className={style.labels}>Email</label>
              <input 
                type="email" 
                id="email" 
                className={style.input}
                placeholder='Enter Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <label htmlFor="psw" className={style.labels}>Password</label>
              <input 
                type={isShowPw ? 'text' : 'password'} 
                id="psw" 
                className={style.input}
                placeholder='Enter Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <div className="flex items-center">
                <input type="checkbox" id="showpsw"/>
                <label htmlFor="showpsw" onClick={showPassword} className="cursor-pointer ml-3 " >Show password</label>
              </div>
              {/* <Link href="/buildingprofile"> */}
                <button className={style.signup}>Sign Up</button>
              {/* </Link> */}
            </form>

            <div className="p-[30px] font-[500] text-center"  >
              <Link href="/login">Already have an account ? Log In</Link>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Signup
