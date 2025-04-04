import React from 'react'
import s from './ClassroomOption.module.css'
import { NavLink, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const StudentClassroomOption = () => {
    const { classroomID } = useParams();
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
                    <NavLink className={({ isActive }) => (isActive ? s.active : s.inactive)} to={`/dashboard/joined/${classroomID}/posts`}>Posts</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? s.active : s.inactive)} to={`/dashboard/joined/${classroomID}/video`}>Upload Video</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? s.active : s.inactive)} to={`/dashboard/joined/${classroomID}/stream`}>Live Stream</NavLink>
                </div>
                <div className={s.classNameContainer2}>
                    <p><span>Class</span> : {getNameById()}</p>
                </div>
            </div>

        </div>
    )
}

export default StudentClassroomOption