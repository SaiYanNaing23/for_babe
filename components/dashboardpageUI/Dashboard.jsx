'use client'
import React, { useState } from 'react'
import style from '@/components/dashboardpageUI/dashboard.module.css'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from '@nextui-org/react'
// import axios from 'axios';
import SideNavBar from '../navbar/sideNavBar'

const Sidenav = () => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  return (
    <div className={style.maindiv}>
      {/* Side Nav bar */}
      <SideNavBar/>

      {/* Dashboard Page */}
      <div className={style.contentdiv} >
        {/* Welcome Div */}
        <div className={style.welcomediv}>
          <div className={style.leftdiv}>
            <h1 className={style.maintitle}>Glad you're here !</h1>
            
            <h3 className={style.text}>Success starts with the right mentor<br/>
            Begin your match-making journey!</h3>
          </div>
          <div className={style.rightdiv}>
            <script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"></script>
            <dotlottie-player src="https://lottie.host/12a84332-5921-4cc8-81d5-6caff3c9d857/4riMVeHiKE.json" background="transparent" speed="1" direction="1" playMode="normal" loop autoplay></dotlottie-player>
          </div>
        </div>

        {/* Blogs Div */}
        <div className='py-[96px]' >
          <h1 className={style.title}>Blogs</h1>
          <div className={style.blogsdiv}>
            <div className={style.blog} onClick={onOpen}  >
              <img src="../../assets/icons/profile.svg" alt="Profile icon" width="30px"/><br/>
              <h3 className={style.blogtitle}>Blog One Title</h3><br/>
              <img src="../../assets/images/testing.svg" alt="Testing Image" width="400px"/>
            </div>
            <div className={style.blog}>
              <img src="../../assets/icons/profile.svg" alt="Profile icon" width="30px"/><br/>
              <h3 className={style.blogtitle}>Blog Two Title</h3><br/>
              <img src="../../assets/images/testing.svg" alt="Testing Image" width="400px"/>
            </div>
            <div className={style.blog}>
              <img src="../../assets/icons/profile.svg" alt="Profile icon" width="30px"/><br/>
              <h3 className={style.blogtitle}>Blog Three Title</h3><br/>
              <img src="../../assets/images/testing.svg" alt="Testing Image" width="400px"/>
            </div>
          </div>
        </div>

        {/* Announcement Div */}
        <div className='pb-[120px]' >
            <h1 className={style.title}>Announcement</h1>
          <div className={style.announcediv}>
            <div className={style.infodiv}>
              {/* Announcement 1 */}
              <div className={style.left}>
                <h1 className={style.announcetitle}>New Webinar Alert !</h1><br/>
                <p className={style.announcetext}>There is a webinar about "Fundamentals of Information Systems" that will be held at Lobby Room 1 by speaker Kelvin </p>
              </div>
              <div className={style.right}>
                <p className={style.announcedate}>Sep 29</p>
              </div>
            </div>
            <div className={style.line}></div>
            
            {/* Announcement 2 */}
            <div className={style.infodiv}>
              <div className={style.left}>
                <h1 className={style.announcetitle}>Workshop Time !</h1><br/>
                <p className={style.announcetext}>"Make the World Green" workshop will be held to know more about environmental issues and how to increase the recycling rate </p>
              </div>
              <div className={style.right}>
                <p className={style.announcedate}>Oct 10</p>
              </div>
            </div>
            <div className={style.line}></div>

            {/* Announcement 3 */}
            <div className={style.infodiv}>
              <div className={style.left}>
                <h1 className={style.announcetitle}>New Mentor Orientation</h1><br/>
                <p className={style.announcetext}>Let's welcome our New Mentor <b>Kile Riley</b> and have some activities with our community</p>
              </div>
              <div className={style.right}>
                <p className={style.announcedate}>Oct 15</p>
              </div>
            </div>
            <div className={style.line}></div>
          </div>
        </div>
      </div>

      

    {/* Models */}
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
              <ModalBody>
                <p> 
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit
                  dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. 
                  Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. 
                  Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur 
                  proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
            </Modal>
    </div>
  )
}

export default Sidenav;
