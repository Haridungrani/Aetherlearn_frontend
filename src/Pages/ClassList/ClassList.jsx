import React, { useEffect, useState } from 'react';
import s from './ClassList.module.css';
import { Link } from 'react-router-dom'
import ClassroomCard from '../../Components/ClassroomCard/ClassroomCard';
import { useSelector } from 'react-redux';
const ClassList = () => {

    const { classes, loading } = useSelector((state) => state.classes);

    return (
        <div className={s.container}>
            {
                loading ? (<h1>Loading</h1>) : (<>
                    {

                        classes.ownClasses.length == 0 ? (<>You dont own any Clsses</>) : (<>
                            <h1 className={s.h1Title}>Your Classes</h1>
                            {
                                classes.ownClasses.map((item, index) => (
                                    <Link to={`/dashboard/own/${item._id}/posts`}>
                                        <ClassroomCard item={item} />
                                    </Link>
                                ))
                            }
                        </>)
                    }


                    {

                        classes.joinedClasses.length == 0 ? (<>You dont Joined any Clsses</>) : (<>
                            <h1 className={s.h1Title}>Joined Classes</h1>
                            {
                                classes.joinedClasses.map((item, index) => (
                                    <Link to={`/dashboard/joined/${item._id}/posts`}>
                                        <ClassroomCard item={item} />
                                    </Link>
                                ))
                            }
                        </>)
                    }

        
                </>)
            }
        </div>
    )
}

export default ClassList