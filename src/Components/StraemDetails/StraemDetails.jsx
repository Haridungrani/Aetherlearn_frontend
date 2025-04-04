import React from 'react'
import s from './StraemDetails.module.css'

const StraemDetails = () => {
  return (
    <div className={s.container}>
        
       <div className={s.titleContainer}>
            <h3>Details : </h3>
            <button>Edit</button>
       </div>

            <div className={s.filedContainer}>
                <label htmlFor="videoTitle">Title (required): </label>
                <p>This is Nishant</p>
            </div>

            <div className={s.filedContainer2}>
                <label htmlFor="videoTitle">Description: </label>
                <p>This is Nishant</p>
            </div>
    </div>
  )
}

export default StraemDetails