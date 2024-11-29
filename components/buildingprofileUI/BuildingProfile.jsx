"use client"
import React, { useEffect, useState } from 'react'
import style from '@/components/buildingprofileUI/buildingprofile.module.css'
import { useAuthStore } from '@/store/auth'
import { useRouter } from 'next/navigation'
import { useMatchStore } from '@/store/match'

const Buildingprofile = () => {
    const { user,authCheck } = useAuthStore()
    const { fields , fetchFieldsData, updateBuildingProfile } = useMatchStore()
    const router = useRouter()

    const [name, setName] = useState('');
    const changeName = (event) => {
        setName(event.target.value)
    }
    const [job, setJob] = useState(''); 
    const changeJob = (event) => {
        setJob(event.target.value)
    }
    const [selectedField, setSelectedField] = useState('')
    const [field, setField] = useState([]); 

    const changeField = (event) => {
        setSelectedField(event.target.value)
    }

    const [country, setCountry] = useState(''); 
    const changeCountry = (event) => {
        setCountry(event.target.value)
    }
    const [company, setCompany] = useState(''); 
    const changeCompany = (event) => {
        setCompany(event.target.value)
    }
    const [level, setLevel] = useState('');
    const changeLevel = (event) => {
        setLevel(event.target.value)
    }
    const [bio, setBio] = useState(''); 
    const changeBio = (event) => {
        setBio(event.target.value)
    }

    useEffect(()=> {
        authCheck()
        // fetchFieldsData()
        // setField(fields)
      },[authCheck])

    useEffect(()=>{
        if(!user){
            router.push("/login/signup")
        }
        fetchFieldsData()
        setField(useMatchStore.getState().fields);
    },[user])

    const onSubmitBuildProfile = (e) => {
        e.preventDefault()
        let variables = {
            username: name,
            job_title: job,
            field: selectedField,
            country: country,
            company: company,
            experience: level,
            bio: bio,
        }
        updateBuildingProfile(variables)
        router.push("/choice")
        setName("")
        setJob("")
        setCountry("")
        setSelectedField("")
        setCompany("")
        setLevel("")
        setBio("")
    }
    
    return (
    <div className='flex h-screen justify-between'>
        {/* Left Div */}
        <div className='w-1/2'>
            <form className={style.formdiv} onSubmit={onSubmitBuildProfile} >
                {/* Form Left Side */}
                <div className= 'flex justify-between '>
                <div>
                    <label htmlFor="name" className={style.labels}>Name</label>
                    <input type="text" id="name" value={name} className={style.input} required onChange={changeName} />

                    <label htmlFor="job" className={style.labels}>Job title</label>
                    <input type="text" id="job" value={job} className={style.input} onChange={changeJob}/>

                    <label htmlFor="field" className={style.labels}>Field</label>
                    <select 
                        className={style.dropdown}
                        placeholder="Select Field"
                        value={selectedField}
                        onChange={changeField}>
                        <option value="" disabled>
                            Select Field
                        </option>
                        {Array.isArray(field) && field.map((option, index) => (
                            <option value={option} key={index}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>
 
                {/* Form Right Side */}
                <div>
                    <label htmlFor="country" className={style.labels}>Country</label>
                    <input type="text" id="country" value={country} className={style.input} onChange={changeCountry}/>

                    <label htmlFor="company" className={style.labels}>Company</label>
                    <input type="text" id="company" className={style.input} value={company} onChange={changeCompany}/>

                    <label htmlFor="level" className={style.labels}>Proficiency level</label>
                    <select className={style.dropdown} value={level} required onChange={changeLevel}>
                        <option value="" disabled >Select Your Experience</option>
                        <option value="Starter">Starter</option> 
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                        <option value="Professional">Professional</option>
                    </select>
                </div>
                </div>
                {/* Bio Section */}
                <label htmlFor="bio" className={style.labels}>Bio</label>
                <textarea id="bio" value={bio} rows="5" className={style.input} style={{ width: '100%', height: '150px' }} required onChange={changeBio}></textarea>

                {/* Button */}
                <button type="submit" className={style.button}>Build Profile</button>
            </form>
        </div>
        
        {/* Right div */}
        <div className='mr-auto p-[50px] pt-[100px] ' >
            {/* Profile div */}
            <div className={style.profilediv}>
                <div>
                    <img src="../../assets/images/femaleprofile.svg" alt="User Profile" className={style.profileimg}/>
                </div>
                <div>
                    <p className={style.name}>{name}</p>
                    <p className={style.jobtitle}>{job}</p>
                </div>
            </div>

            <hr className={style.line}/>

            {/* Bio and Background */}
            <div className={style.infodiv}>
                <div className={style.bio}>
                    <h1 className={style.title}>Bio</h1>
                    <p className={style.text} style={{maxWidth: '500px'}}>{bio}</p>
                </div>
                <div className={style.background}>
                    <h1 className={style.title}>Background</h1>
                    <h2 className={style.smalltitle}>Educational Background</h2>
                    <p className={style.text}>{company}</p>
                    <h2 className={style.smalltitle}>Job Experience</h2>
                </div>
            </div>  
        </div>
    </div>
  )
}

export default Buildingprofile
