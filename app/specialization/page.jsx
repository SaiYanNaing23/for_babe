"use client";
import { useMatchStore } from '@/store/match';
import {Button} from "@nextui-org/react";
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

const page = () => {
    const { specializations, fetchSkills } = useMatchStore()
    const router = useRouter()

    const onChooseSpecializationsHandler = (specialization) =>{
        console.log(specialization)
        fetchSkills({specialization})
        router.push("/skill")
    }

    useEffect(()=> {
        if(!specializations.length){
          return router.push("/buildingprofile")
        }
      }, [specializations])

  return (
    <div className='h-screen flex w-screen' >
    <div className='w-1/2' >
      left
    </div>
    <div className='w-1/2 flex items-center justify-center ' >
      <div >
        {specializations.length && specializations.map((specializations,index) => (
          <Button 
            color="primary" 
            size='lg' 
            key={index} 
            className='!text-[18px] !py-[20px] !px-[25px] mr-5 mb-8 ' 
            onClick={() => onChooseSpecializationsHandler(specializations)}
          >
            {specializations}
          </Button> 
        ))}
         
      </div>
    </div>
  </div>
  )
}

export default page
