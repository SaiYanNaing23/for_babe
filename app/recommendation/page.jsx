"use client";
import { useAuthStore } from '@/store/auth';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { Button } from '@nextui-org/react';

const Page = () => {
  const [mentors, setMentors] = useState([]);
  const { authCheck } = useAuthStore(); 
  const router = useRouter()

  useEffect(() => {
    authCheck().then(() => {
      const userFromStore = useAuthStore.getState().user.matchedWith;
      console.log(userFromStore);
      setMentors(userFromStore || []);
    });
  }, [authCheck]);

  const redirectMentorDetailHandler = (mentor) => {
    return router.push(`/mentor/detail/${mentor._id}`)
  }

  return (
    <div className="h-screen flex items-center justify-center">
      <div>
        <div className='grid grid-cols-3 gap-12 ' >
          {/* Render mentors */}
          {mentors.length > 0 ? (
            mentors.map((mentor) => (
              <div key={mentor._id} className="bg-white w-[300px] mb-5 rounded-xl">
                <div className='p-6 text-center border-b h-[70px] ' >
                  image
                </div>
                <div className='p-6' >
                  <h1 className='mb-3' >
                    {mentor.name}
                  </h1>
                  <h1 className='mb-3' >
                    {mentor.career}
                  </h1>
                  <h1 className='mb-3' >
                    {mentor.job_title}
                  </h1>
                </div>
                <div className='flex justify-end mr-3 ' >
                  <Button
                      color='primary'
                      size="lg"
                      className="!text-[18px] !py-[8px] !px-[15px] mr-5 mb-8"
                      onClick={()=> redirectMentorDetailHandler(mentor)}
                    >
                      Show Info
                  </Button>
                </div>
              </div>
            ))
          ) : (
            <div>No mentors found</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
