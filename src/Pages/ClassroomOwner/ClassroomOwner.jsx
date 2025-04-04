import React from 'react'
import s from './ClassroomOwner.module.css'
import ClassroomOption from '../../Components/ClassroomOption/ClassroomOption'
import { Outlet } from 'react-router-dom'

const ClassroomOwner = () => {
  return (
    <div className={s.conatiner}>
       <ClassroomOption />
       <div className={s.outletFix}>
          <Outlet />
       </div>
    </div>
  )
}

export default ClassroomOwner