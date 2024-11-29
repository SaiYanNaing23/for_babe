"use client";
import React, { useEffect, useState } from 'react'
import style from '@/components/aboutpageUI/about.module.css'
import SideNavBar from '../navbar/sideNavBar'
import { useMentorStore } from '@/store/mentor';
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import { useAuthStore } from '@/store/auth';
import { useRouter } from 'next/navigation';


const detail = () => {
    const { mentors, agreementMutation, fetchMentorDetails } = useMentorStore()
    const [ agree, setAgree ] = useState(false)
    const [ confirm, setConfirm] = useState(false)
    const [ isUpdating, setIsUpdating ] = useState(false)
    const [ schedulesForMentee, setSchedulesForMentee ] = useState([])
    const { authCheck, user } = useAuthStore(); 
    const router = useRouter()

    const generateMeetingSchedule = (numOfDays = 1) => {
        const schedule = [];
        
        const timeSlots = [
          { start: 9, end: 10 },
          { start: 11, end: 12 },
          { start: 13, end: 14 },
          { start: 15, end: 16 },
          { start: 17, end: 18 },
          { start: 19, end: 20 },
        ];
        
        for (let i = 0; i < numOfDays; i++) {
          const currentDate = new Date();
          currentDate.setDate(currentDate.getDate() + i);  
          currentDate.setUTCHours(0, 0, 0, 0);  
      
         
          timeSlots.forEach(slot => {
            const startDate = new Date(currentDate);
            startDate.setUTCHours(slot.start, 0, 0, 0);  
            
            const endDate = new Date(startDate);
            endDate.setUTCHours(slot.end, 0, 0, 0);  
      
            schedule.push({
              startDate: startDate.toISOString(), 
              endDate: endDate.toISOString()      
            });
          });
        }
        console.log("schedule", schedule)
        setSchedulesForMentee(schedule.slice(6,12))
        return schedule;
      };

    useEffect(() => {
        authCheck()
        generateMeetingSchedule(2)
        // .then(()=> {
        //     if(!user){
        //         router.push('/login')
        //     }
        // })
    }, [authCheck]);
    
    const handleCheckboxChange = (e) => {
        setAgree(e.target.checked);
      };
    const handleCheckboxConfirmChange = (e) => {
        setConfirm(e.target.checked);
    }
    const onConfirmationHandler = () => {
        try {
            setIsUpdating(true)
           
            let variables = {
                mentee_id : user._id,
                mentor_id : mentors._id
            }
            agreementMutation(variables).then((_)=> {
                setIsUpdating(false)
                onOpenChangeConfirmation(false)
                onOpenSuccess(true);
            })
        } catch (error) {
            setIsUpdating(false)
            onOpenChangeConfirmation(false)
            console.error(error)
        }
    
    }

    const onSuccessHandler = () => {
        try {
            onOpenChangeSuccess(false)
            let variables = {
                id : mentors._id
            }
            fetchMentorDetails(variables)
        } catch (error) {
            console.error(error)
        }
    }

    const [selectedSchedule, setSelectedSchedule] = useState([]);

    // const handleHourClick = (schedule) => {
    //   setSelectedSchedule(schedule);
    // };

    const handleHourClick = (schedule) => {
        if (selectedSchedule.some((s) => s.startDate === schedule.startDate)) {
          // If already selected, remove it
          setSelectedSchedule((prev) =>
            prev.filter((s) => s.startDate !== schedule.startDate)
          );
        } else {
          // Add it if not selected
          setSelectedSchedule((prev) => [...prev, schedule]);
        }
      };

      console.log("selectedSchedule", selectedSchedule)

      const onBookingHandler = () => {

      }
    const {isOpen : isOpenConfirmation, onOpen : onOpenConfirmation, onOpenChange : onOpenChangeConfirmation} = useDisclosure();
    const {isOpen : isOpenSuccess, onOpen : onOpenSuccess, onOpenChange : onOpenChangeSuccess} = useDisclosure();

    
    return (
        <div className={style.maindiv}>
            {/* Side Nav bar */}
            <SideNavBar/>

            <div className='w-full p-28 ' >
                <div className='flex gap-10 items-center border-b-3 pb-24  '  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 24 24"><path fill="gray" d="M12 19.2c-2.5 0-4.71-1.28-6-3.2c.03-2 4-3.1 6-3.1s5.97 1.1 6 3.1a7.23 7.23 0 0 1-6 3.2M12 5a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-3A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10c0-5.53-4.5-10-10-10"/></svg>
                    <p className='flex flex-col text-[32px] font-bold ' >
                        <span className='inline-block mb-5 '  >
                            {mentors.name}
                        </span>
                        <span className='inline-block  '  >
                            {mentors.job_title}
                        </span>
                       
                    </p>
                </div>
                <div className='flex justify-between' >
                    <div className='flex flex-col p-8 w-1/2 ' >
                        <h2 className='text-[24px] font-bold mb-6' >
                            Description
                        </h2>
                        <p className='w-full text-[18px] leading-10  ' >
                            {mentors.bio}
                        </p>
                    </div>
                    {/* Card */}
                    {mentors.agreedMenteeIds?.includes(user?._id) ? (
                        <div className="border-3 rounded-2xl p-12 -mt-20 mr-10 min-w-[35%] bg-white">
                        <h3 className="text-[18px] font-bold text-center">Choose Schedules</h3>
                        {schedulesForMentee.length > 0 ? (
                          <div className='grid grid-cols-2 mt-9 gap-3 ' >
                            {schedulesForMentee.map((schedule, index) => {
                            const startHourUTC = new Date(schedule.startDate).getUTCHours();
                            const isSelected = selectedSchedule.some(
                                (s) => s.startDate === schedule.startDate
                            );

                            return (
                                <Button
                                key={index}
                                color={isSelected ? "success" : "primary"}
                                className="!text-[18px] !py-[20px] !px-[25px] mr-5 mb-8"
                                isDisabled={selectedSchedule.length > 0 && !isSelected}
                                onClick={() => handleHourClick(schedule)}
                                >
                                {startHourUTC}:00
                                </Button>
                            );
                            })}
                          </div>
                          
                        ) : (
                          <div>Wait to Generate Schedule</div>
                        )}
                        <div className='flex justify-center' >
                            <Button
                                color='secondary'
                                className="!text-[18px] !py-[20px] !px-[25px] mr-5 mb-8  "
                                onClick={onBookingHandler}
                            >
                                Book
                            </Button>
                        </div>
                      </div>
                    ) : 
                    (<div className='border-3 rounded-2xl p-12 -mt-20  mr-10 min-w-[35%] bg-white ' >
                        <h3 className='text-[18px] font-bold text-center ' >Rules & Regulations </h3>
                        <ul className='text-[16px] leading-8 my-8 ' >
                            <li>
                                - Must respect mentor's time and availability
                            </li>
                            <li className='mt-5' >
                                - No last-minute cancellation is accepted
                            </li>
                            <li className='mt-5' >
                                - Must attend sessions punctually 
                            </li>
                            <li className='mt-5' >
                                - Be clear about goals and expectations 
                            </li>
                            <li className='mt-5' >
                                - Maintain professionalism and respect boundaries 
                            </li>
                        </ul>
                        <div className='flex items-center gap-4 mt-5 ' >
                            <input id='agree' onChange={handleCheckboxChange}  className='size-6' type="checkbox"/>
                            <label htmlFor="agree">Agree to Rules and Regulations </label>
                        </div>
                        <div className='flex justify-end gap-4 mt-8 ' >
                        <Button color="primary" size='lg' onPress={onOpenConfirmation} isDisabled={!agree} className='text-[16px] py-8 px-11 '  >
                            Confirm
                        </Button>
                        </div>
                    </div>)
                     }
                    
                </div>
            </div>


            {/* Modals */}
            <Modal isOpen={isOpenConfirmation} size='2xl' className={{body : 'py-6'}} onOpenChange={onOpenChangeConfirmation}>
                <ModalContent>
                {(onClose) => (
                    <>
                    <ModalHeader className="flex flex-col gap-1 text-[18px] ">Confirmation</ModalHeader>
                    <ModalBody>
                        <p> 
                        Click the checkbox if you are connecting with this mentor and start a session for your learning journey. 
                        </p>
                        <p className='flex items-center gap-4 mt-3 ' >
                            <input id='confirm' onChange={handleCheckboxConfirmChange}  className='size-6' type="checkbox"/>
                            <label htmlFor="confirm">I confirm to match with (connect to) this mentor</label>
                         
                        </p>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" size='lg' variant="light" onPress={onClose}>
                            Close
                        </Button>
                        <Button color="primary" isLoading={isUpdating} size='lg' isDisabled={!confirm} onPress={() => onConfirmationHandler(onClose)}>
                            Confirm
                        </Button>
                    </ModalFooter>
                    </>
                )}
                </ModalContent>
            </Modal>

            {/* Success */}
            <Modal isOpen={isOpenSuccess} size='2xl' className={{body : 'py-6'}} onOpenChange={onOpenChangeSuccess}>
                <ModalContent>
                {(onClose) => (
                    <>
                    <ModalHeader className="flex flex-col gap-1 text-[18px] ">Matching Successful !</ModalHeader>
                    <ModalBody>
                        <p> 
                            Congratulations !                         
                        </p>
                        <p  >
                            You're successfully connected to this mentor. Book a session to start !
                        </p>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" size='lg' variant="light" onPress={onClose}>
                            Close
                        </Button>
                        <Button color="primary" size='lg' onPress={onSuccessHandler}>
                            Book a session
                        </Button>
                    </ModalFooter>
                    </>
                )}
                </ModalContent>
            </Modal>
        </div>
    )
}

export default detail
