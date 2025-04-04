import React, { useEffect } from 'react'
import s from './ClassroomOption.module.css'
import {Link , NavLink, useParams} from 'react-router-dom'
import { useSelector } from 'react-redux'
const ClassroomOption = () => {
  const {classroomID} = useParams();
  const { classes } = useSelector((state) => state.classes);

  const getNameById = () => {
    const item = classes.joinedClasses.find(item => item._id === classroomID) 
              || classes.ownClasses.find(item => item._id === classroomID);
    return item ? item.name : null;
};


  return (
    <div className={s.container}>
        <div className={s.textContainer}>
            <div className={s.textContainer2}>
              <NavLink className={({ isActive }) => (isActive ?  s.active : s.inactive)} to={`/dashboard/own/${classroomID}/posts`}>Posts</NavLink>
              <NavLink className={({ isActive }) => (isActive ?  s.active : s.inactive)} to={`/dashboard/own/${classroomID}/video`}>Upload Video</NavLink>
              <NavLink className={({ isActive }) => (isActive ?  s.active : s.inactive)} to={`/dashboard/own/${classroomID}/stream`}>Live Stream</NavLink>
              <NavLink className={({ isActive }) => (isActive ?  s.active : s.inactive)} to={`/dashboard/own/${classroomID}/people`}>People</NavLink>
              <NavLink className={({ isActive }) => (isActive ?  s.active : s.inactive)} to={`/dashboard/own/${classroomID}/setting`}>Setting</NavLink>
            </div>
        <div className={s.classNameContainer}>
          <p><span>Class</span> : { getNameById()}</p>
        </div>
        </div>

    </div>
  )
}

export default ClassroomOption