import React, { useState } from 'react'
import s from './DragAndDropVideo.module.css'
import { FileUploader } from "react-drag-drop-files";
import { MdFileUpload } from "react-icons/md";
import { getSignedUrl } from '../../services/operation/video';
import { useParams } from 'react-router-dom';
import DialogTitlebar from '../UploadVideoPopup/DialogTitlebar';

const DragAndDropVideo = ({ loading, setLoading, closeModal }) => {

    const { classroomID } = useParams();
    const fileTypes = ["mp4", "mkv"];
    const [file, setFile] = useState(null);
    const handleChange = (file) => {
        setFile(file);
        console.log(file)
        setLoading(true)    //Just to show Animation
        // Call to Presigned Url
        setTimeout(() => {
            getSignedUrl(setLoading, classroomID, file);
        }, 3000)
    };


    return (
        <>
            <DialogTitlebar loading={loading} title={"Upload Video"} closeModal={closeModal} />
            <div className={s.dragFile}>
                <FileUploader handleChange={handleChange} name="file" types={fileTypes}  >
                    <div className={s.dragFileInner}>
                        <div className={`${s.iconRound} ${loading ? s.activateBGAnimation : ''}`}>
                            <MdFileUpload className={s.arrow} />
                        </div>
                        <h1 className={s.h1Title}>Drag and drop single video file to upload</h1>
                        <p className={s.pStyle}>Only MP4 and MKV File allowed and size must less than 50MB</p>
                    </div>
                </FileUploader>
            </div>
        </>
    )
}

export default DragAndDropVideo