import React from 'react'
import s from './UploadVideoPopup.module.css'
import { IoCloseCircleOutline } from "react-icons/io5";

const DialogTitlebar = ({loading , title ,closeModal}) => {
    return (
        <div className={s.titleBar}>
            <div className={s.tempTileFix}>
                <h4>{title}</h4>
                {title=="Upload Video" && <IoCloseCircleOutline className={s.closeicon} onClick={()=>closeModal()}/>}
                {title=="Edit Details" && <IoCloseCircleOutline className={s.closeicon} onClick={()=>closeModal()}/>}
                {title=="Post" && <IoCloseCircleOutline className={s.closeicon} onClick={()=>closeModal()}/>}
                {title=="Edit Post" && <IoCloseCircleOutline className={s.closeicon} onClick={()=>closeModal()}/>}
                    
            </div>
            <div className={`${s.topLoadBar} ${!loading ? s.inactive:''}`}>
                <div className={s.loadIndicator}></div>
            </div>
        </div>
    )
}

export default DialogTitlebar