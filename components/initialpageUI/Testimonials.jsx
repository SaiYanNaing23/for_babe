"use client"
import React, { useState } from 'react'
import style from '@/components/initialpageUI/testimonials.module.css'

const Testimonials = () => {
    const [toggle, setToggle ] = useState(1)
    const toggleTab = (index) =>{
        setToggle(index)
        console.log(toggle)
    }
    return (
    <div className='mt-[150px] mb-[200px]'>
        <div>
            <ul className={style.titlelist}>
                <li className={toggle == 1 ? style.titleactive : style.title} onClick={() => toggleTab(1)} >Information Technology</li>
                <li className={toggle == 2 ? style.titleactive : style.title} onClick={() => toggleTab(2)} >Healthcare</li>
                <li className={toggle == 3 ? style.titleactive : style.title} onClick={() => toggleTab(3)} >Engineering</li>
                <li className={toggle == 4 ? style.titleactive : style.title} onClick={() => toggleTab(4)} >Business and Finance</li>
                <li className={toggle == 5 ? style.titleactive : style.title} onClick={() => toggleTab(5)} >Art and Design</li>
            </ul>

            {/* Information Technology */}
            <div>
                <div className={toggle === 1 ? 'block' : 'hidden' }>
                    <div className={style.testimonialdiv} >
                        <div className={style.box}>
                            <div className={style.info}>
                                <img src="/assets/icons/profile.svg" alt="profile" />
                                <span>
                                    <p className={style.name}>Arjun Reddy</p>
                                    <p className={style.jobtitle}>
                                    Front-end developer 
                                    </p>
                                </span>
                            </div>
                            <hr className={style.line}/>
                            <div className={style.content}>
                                I believe mentorship is crucial in IT. As a web developer, I can help guide mentees in mastering front-end frameworks, which will enhance job prospects.
                            </div>
                        </div>
                        <div className={style.box} >
                            <div className={style.info} >
                                <img src="/assets/icons/profile.svg" alt="profile" />
                                <span>
                                    <p className={style.name}>Yu Thandar Khin</p>
                                    <p className={style.jobtitle}>
                                       Data analyst
                                    </p>
                                </span>
                            </div>
                            <hr className={style.line}/>
                            <div className={style.content}>
                                For aspiring data analysts, a mentor can provide real-world insights into data manipulation, analysis, and visualization, which go beyond theory.
                            </div>
                        </div>
                        <div className={style.box}>
                            <div className={style.info}>
                                <img src="/assets/icons/profile.svg" alt="profile" />
                                <span>
                                    <p className={style.name}>Edward J</p>
                                    <p className={style.jobtitle}>
                                    Technical support engineer
                                    </p>
                                </span>
                            </div>
                            <hr className={style.line}/>
                            <div className={style.content}>
                                As a Technical Support Engineer, I mentor mentees in troubleshooting, resolving issues, and improving communication, helping them with career opportunities.
                            </div>
                        </div>
                    </div>
                </div>
                {/* Healthcare */}
                <div className={toggle === 2 ? 'block' : 'hidden' }>
                <div className={style.testimonialdiv} >
                        <div className={style.box}>
                            <div className={style.info}>
                                <img src="/assets/icons/profile.svg" alt="profile" />
                                <span>
                                    <p className={style.name}>Dr. Mateo Gomez</p>
                                    <p className={style.jobtitle}>
                                    Cardiologist
                                    </p>
                                </span>
                            </div>
                            <hr className={style.line}/>
                            <div className={style.content}>
                            Being a cardiologist, I guide upcoming professionals in mastering advanced heart care, diagnostics, and patient management, helping them build expertise in cardiovascular health.
                            </div>
                        </div>
                        <div className={style.box}>
                            <div className={style.info}>
                                <img src="/assets/icons/profile.svg" alt="profile" />
                                <span>
                                    <p className={style.name}>Zoe Davis</p>
                                    <p className={style.jobtitle}>
                                    ER nurse
                                    </p>
                                </span>
                            </div>
                            <hr className={style.line}/>
                            <div className={style.content}>
                            As an ER nurse, I guide aspiring healthcare professionals in emergency care, decision-making, and patient management, building their confidence and expertise.
                            </div>
                        </div>
                        <div className={style.box}>
                            <div className={style.info}>
                                <img src="/assets/icons/profile.svg" alt="profile" />
                                <span>
                                    <p className={style.name}>Dr. Olivia Rao</p>
                                    <p className={style.jobtitle}>
                                        Child therapist
                                    </p>
                                </span>
                            </div>
                            <hr className={style.line}/>
                            <div className={style.content}>
                            I help guide new professionals in understanding children's emotions, behaviors, and therapeutic approaches, fostering their ability to support young clients effectively.
                            </div>
                        </div>
                    </div>
                </div>
                {/* Engineering */}
                <div className={toggle === 3 ? 'block' : 'hidden' }>
                <div className={style.testimonialdiv} >
                        <div className={style.box}>
                            <div className={style.info}>
                                <img src="/assets/icons/profile.svg" alt="profile" />
                                <span>
                                    <p className={style.name}>Evan Wang</p>
                                    <p className={style.jobtitle}>
                                        Manufacturing engineer
                                    </p>
                                </span>
                            </div>
                            <hr className={style.line}/>
                            <div className={style.content}>
                            As a Manufacturing Engineer, I help guide mentees through process improvement, automation, and quality control and grow their technical skills and advance professionally.
                            </div>
                        </div>
                        <div className={style.box}>
                            <div className={style.info}>
                                <img src="/assets/icons/profile.svg" alt="profile" />
                                <span>
                                    <p className={style.name}>Thar Aung Zaw</p>
                                    <p className={style.jobtitle}>
                                    Control systems engineer
                                    </p>
                                </span>
                            </div>
                            <hr className={style.line}/>
                            <div className={style.content}>
                            I guide mentees about the complexities of system design, optimization, and implementation. I want them sharpen their technical expertise and career growth.
                            </div>
                        </div>
                        <div className={style.box}>
                            <div className={style.info}>
                                <img src="/assets/icons/profile.svg" alt="profile" />
                                <span>
                                    <p className={style.name}>Karnan Chhabara</p>
                                    <p className={style.jobtitle}>
                                    Construction manager
                                    </p>
                                </span>
                            </div>
                            <hr className={style.line}/>
                            <div className={style.content}>
                            I mentor emerging professionals in project planning, site management, and team coordination, helping them develop leadership skills and succeed in the industry.
                            </div>
                        </div>
                    </div>
                </div>
                {/* Business and Finance */}
                <div className={toggle === 4 ? 'block' : 'hidden' }>
                <div className={style.testimonialdiv} >
                        <div className={style.box}>
                            <div className={style.info}>
                                <img src="/assets/icons/profile.svg" alt="profile" />
                                <span>
                                    <p className={style.name}>David Jordan</p>
                                    <p className={style.jobtitle}>
                                    Human resources manager
                                    </p>
                                </span>
                            </div>
                            <hr className={style.line}/>
                            <div className={style.content}>
                            About talent acquisition, employee relations, and organizational development, building strong leadership and advance in HR will be shared.
                            </div>
                        </div>
                        <div className={style.box}>
                            <div className={style.info}>
                                <img src="/assets/icons/profile.svg" alt="profile" />
                                <span>
                                    <p className={style.name}>Nikcole</p>
                                    <p className={style.jobtitle}>
                                    Market research analyst
                                    </p>
                                </span>
                            </div>
                            <hr className={style.line}/>
                            <div className={style.content}>
                            Mentees have to learn analyzing trends and consumer insightst. They will provide data-driven strategies that drive impactful business decisions and lead to success.
                            </div>
                        </div>
                        <div className={style.box}>
                            <div className={style.info}>
                                <img src="/assets/icons/profile.svg" alt="profile" />
                                <span>
                                    <p className={style.name}>Kyi Sin Swe</p>
                                    <p className={style.jobtitle}>
                                        Accountant
                                    </p>
                                </span>
                            </div>
                            <hr className={style.line}/>
                            <div className={style.content}>
                            Guiding future accountants, I focus on refining their skills in financial analysis, tax strategies, and budgeting. I will help to build confidence and achieve professional growth.
                            </div>
                        </div>
                    </div>
                </div>
                {/* Art and Design */}
                <div className={toggle === 5 ? 'block' : 'hidden' }>
                    <div className={style.testimonialdiv}>
                        <div className={style.box}>
                            <div className={style.info}>
                                <img src="/assets/icons/profile.svg" alt="profile" />
                                <span>
                                    <p className={style.name}>Naree Soma</p>
                                    <p className={style.jobtitle}>
                                        Digital artist
                                    </p>
                                </span>
                            </div>
                            <hr className={style.line}/>
                            <div className={style.content}>
                            Helping aspiring digital artists navigate tools and techniques to transform their visions into stunning works of art, I encourage bold creativity and technical precision.
                            </div>
                        </div>
                        <div className={style.box}>
                            <div className={style.info}>
                                <img src="/assets/icons/profile.svg" alt="profile" />
                                <span>
                                    <p className={style.name}>Richard Henson</p>
                                    <p className={style.jobtitle}>
                                        Brand designer
                                    </p>
                                </span>
                            </div>
                            <hr className={style.line}/>
                            <div className={style.content}>
                            Through mentorship, I teach future brand designers how to craft authentic, eye-catching identities that resonate with audiences, blending strategy with artistry for lasting impact.
                            </div>
                        </div>
                        <div className={style.box}>
                            <div className={style.info}>
                                <img src="/assets/icons/profile.svg" alt="profile" />
                                <span>
                                    <p className={style.name}>Rui Ji Yuk</p>
                                    <p className={style.jobtitle}>
                                        Character animator
                                    </p>
                                </span>
                            </div>
                            <hr className={style.line}/>
                            <div className={style.content}>
                            I guide learners in creating dynamic, emotionally rich characters, focusing on the power of movement and expression to bring animated stories to life in fresh, compelling ways.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonials
