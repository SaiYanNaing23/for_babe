import React from 'react'
import style from '@/components/initialpageUI/results.module.css'

const Results = () => {
  return (
    <div className='mb-[96px] mt-[400px]' >
      <h1 className={style.title}>Results</h1>
      <div className={style.main}>
        <div className={style.branch}>
            <h1 className={style.num}>10+ M</h1>
            <p className={style.text}>Users</p>
        </div>
        <div className={style.branch}>
            <h1 className={style.num}>1000+</h1>
            <p className={style.text}>Mentors</p>
        </div>
        <div className={style.branch}>
            <h1 className={style.num}>92%</h1>
            <p className={style.text}>Matches</p>
        </div>
        <div className={style.branch}>
            <h1 className={style.num}>15</h1>
            <p className={style.text}>Countries</p>
        </div>
      </div>
    </div>
  )
}

export default Results
