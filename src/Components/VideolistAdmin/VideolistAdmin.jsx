import React, { useEffect, useState } from 'react'
import s from './VideolistAdmin.module.css'
import { getVideoMetadata } from '../../services/operation/video';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../Spinner/Spinner';
import { PiFileVideoLight } from "react-icons/pi";
import ContentDisplayCard from '../ContentDisplayCard/ContentDisplayCard';

const VideolistAdmin = ({setEditOpen}) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const { classroomID } = useParams();

    const handleDeletePost = (postId) => {
        setData(prevPosts => prevPosts.filter(post => post._id !== postId));
    }
    

    useEffect(() => {
        getVideoMetadata(classroomID, setData, setLoading)
    }, []);

    return (
        <div className={s.conatiner}>
            {
                loading ? (<div className={s.loadingContainer}><LoadingSpinner /><p>Buckle up! We’re diving into your video vault!</p></div>) : (
                    <>
                        {
                            data.length == 0 ? (<>No Data</>) : (
                                <div >
                                    {
                                        data.map((item) => (
                                            
                                            
                                                <ContentDisplayCard item={item} Icon={PiFileVideoLight} classroomID={classroomID} handleDeletePost={handleDeletePost} setEditOpen={setEditOpen}/>
                                            
                                        ))
                                    }
                                </div>
                            )
                        }
                    </>
                )
            }
        </div>
    )
}

export default VideolistAdmin

