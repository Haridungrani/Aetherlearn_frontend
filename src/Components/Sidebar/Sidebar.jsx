import React from 'react'
import s from './Sidebar.module.css'
import { GoHome, GoPeople } from "react-icons/go";
import { SlGraduation } from "react-icons/sl";
import { Link , NavLink } from 'react-router-dom';


const Sidebar = ({classes}) => {
    return (
        <div className={s.SideBarContainer}>
            <div className={s.list1}>
                <GoHome className={s.HoneIcon} />
                <Link to="/dashboard" className={s.navlinkFix}><p>Home</p></Link>
            </div>
            <div className={s.seprationTitle}>
                <GoPeople className={s.HoneIcon} />
                Teaching
            </div>
            <div className={s.list2}>
                {
                    classes.joinedClasses.length > 0 && (
                    <>
                        {
                            classes.ownClasses.map((data,index)=>(<Link to={`/dashboard/own/${data._id}/posts`} className={s.navlinkFix}><p className={s.classListView}>{data.name}</p></Link>))
                        }
                    </>)
                }
            </div>
            <div className={s.seprationTitle}>
                <SlGraduation className={s.HoneIcon} />
                Learning
            </div>
            <div className={s.list2}>
                <div className={s.list2}>
                    {
                        classes.joinedClasses.length > 0 && (
                        <>
                            {
                                classes.joinedClasses.map((data,index)=>(<p className={s.classListView}>{data.name}</p>))
                            }
                        </>)
                    }
                </div>
            </div>

        </div>
    )
}

export default Sidebar