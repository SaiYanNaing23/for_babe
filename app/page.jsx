"use client"
import { useEffect } from 'react';
import Dashboard from '../app/dashboard/page'
import { useAuthStore } from '@/store/auth';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
export default function Home() {
  const { user, authCheck } = useAuthStore()
  console.log("auth user", user)
  useEffect(()=> {
    authCheck()
  },[authCheck])
  return (
    <>
    <Dashboard/>
    {/* <ToastContainer/> */}
    {/* <InitialPage/> */}
    {/* <LoginPage/>
    <DashboardPage/>
    <MymatchesPage/>
    <AboutPage/>
    <UserprofilePage/> */}
    </>
  );
}
