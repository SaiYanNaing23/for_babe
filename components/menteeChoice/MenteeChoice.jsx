"use client"
import React, { useEffect } from 'react'
import {Button} from "@nextui-org/react";
import { useMatchStore } from '@/store/match';
import { useRouter } from 'next/navigation';

const MenteeChoice = () => {
  const router = useRouter()
  const { careers, fetchSpecialization } = useMatchStore()
  const onChooseCareerHandler = (career) => {
    try {
      fetchSpecialization({career})
      router.push("/specialization")
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(()=> {
    if(!careers.length){
      return router.push("/buildingprofile")
    }
  }, [careers])

  return (
    <div className='h-screen flex w-screen' >
      <div className='w-1/2' >
        left
      </div>
      <div className='w-1/2 flex items-center justify-center ' >
        <div className='' >
          {careers.length && careers.map((career,index) => (
            <Button 
              color="primary" 
              size='lg' 
              key={index} 
              className='!text-[18px] !py-[20px] !px-[25px] mr-5 mb-8 ' 
              onClick={() => onChooseCareerHandler(career)}
            >
              {career}
            </Button> 
          ))}
           
        </div>
      </div>
    </div>
  )
}

export default MenteeChoice;
