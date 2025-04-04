import React from 'react'
import s from './ContentDisplayCard.module.css'
import Option from '../Option/option';
import { Link } from 'react-router-dom';
import {videoOption} from '../../utils/optionData';

const ContentDisplayCard = ({ item, Icon,classroomID,handleDeletePost,setEditOpen}) => {

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
                <div className={s.optionContaienr}>
                    {/* <Option optionData={videoOption}/> */}
                    <Option optionData={videoOption} id={item._id} handleDeletePost={handleDeletePost} setEditOpen={setEditOpen}/>
                </div>
            </div>

            {/* Video Display  */}
            <Link to={`/dashboard/own/${classroomID}/video/${item.videoId}`} className={s.LinkStyle}>
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
    );
};

export default ContentDisplayCard;
