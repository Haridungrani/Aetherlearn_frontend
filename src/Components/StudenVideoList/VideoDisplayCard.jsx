import React from 'react'
import s from './VideoDisplayCard.module.css'
import Option from '../Option/option';
import { Link } from 'react-router-dom';

const VideoDisplayCard = ({ item, Icon, classroomID}) => {
    const { userId, createdAt, title, description } = item;
    return (
        <div className={s.videoContainer}>

            {/* Uploader Details */}

            <div className={s.uploaderDetails}>
                <div className={s.detailsWrapper}>
                    <div className={s.badge}>
                        <p>{userId.firstName[0]}</p>
                    </div>
                    <div>
                        <p className={s.names}>{userId.firstName} {userId.lastName}</p>
                        {
                            createdAt && <p className={s.date}>{createdAt.split('T')[0]}</p>
                        }
                    </div>
                </div>
            </div>

            {/* Video Display  */}
            <Link to={`/dashboard/joined/${classroomID}/video/${item.videoId}`} className={s.LinkStyle}>
                <div className={s.videoDisplay}>
                    <div className={s.imgConatiner}> <Icon /></div>
                    <div className={s.postContent}>
                        <p>{title}</p>
                        <p className={s.cotentType}>VIDEO</p>
                    </div>
                </div>
            </Link>

            <div className={s.decriptionBox}>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default VideoDisplayCard