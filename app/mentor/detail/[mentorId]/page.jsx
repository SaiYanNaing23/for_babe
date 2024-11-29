"use client"
import { useMentorStore } from '@/store/mentor';
import React, { useEffect } from 'react'
import Detail from '@/components/mentor/detail'
import Globalnav from '@/components/dashboardpageUI/Globalnav';

const page = ({params}) => {
    const { fetchMentorDetails } = useMentorStore();
    useEffect(()=>{
        let variables = {
            id : params.mentorId
        }
        fetchMentorDetails(variables)
    },[params.mentorId]);

  return (
    <>
        <Globalnav/>
        <Detail/>
    </>
  )
}

export default page
