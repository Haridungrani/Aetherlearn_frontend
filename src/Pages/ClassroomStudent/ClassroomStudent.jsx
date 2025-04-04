import React from 'react'
import s from './ClassroomStudent.module.css'
import StudentClassroomOption from '../../Components/ClassroomOption/StudentClassroomOption'
import { Outlet } from 'react-router-dom'
const ClassroomStudent = () => {
  return (
    <div className={s.conatiner}>
    <StudentClassroomOption />
    <div className={s.outletFix}>
       <Outlet />
    </div>
 </div>
  )
}

export default ClassroomStudent