import React from 'react'
import s from './Videos.module.css'
import StudenVideoList from '../../Components/StudenVideoList/StudenVideoList'
const Videos = () => {
  return (
    <>
    <div className={s.container}>
      <div className={s.titleContainer} >
        <h1 className={s.title}>Upload Video</h1>
      </div>
      <StudenVideoList  />
    </div>
</>
  )
}

export default Videos