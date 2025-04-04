import React, { useEffect, useState } from 'react';
import s from './VideoUploadDetails.module.css';
import { getQueryParam } from '../../utils/queryFunction';
import DialogTitlebar from '../UploadVideoPopup/DialogTitlebar';
import { updateDetailsOfVideo } from '../../services/operation/video';
import { getVideoById } from '../../services/operation/post';

const VideoUploadDetails = ( {closeModal, title,submitHandler} ) => {
   
    const [loading,setLoading] = useState(false)
    const [formData, setFormData] = useState({
        videoTitle: '',
        videoDesc: '',
    });
    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    useEffect(()=>{
        if(title=="Edit Details"){
            getVideoById(getQueryParam('id'),setLoading,setFormData)
        }
    },[])

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        // Validation
        if (!formData.videoTitle) {
            newErrors.videoTitle = 'Title is required';
        }
        if (!formData.videoDesc) {
            newErrors.videoDesc = 'Description is required';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            // Submit the form or perform the save action
            console.log('Form submitted:', formData);
            updateDetailsOfVideo(formData,getQueryParam('id'),setLoading,closeModal)
            
            setFormData({ videoTitle: '', videoDesc: '' });
            setErrors({});
        }
    };

    return (
       <>
         <DialogTitlebar loading={loading} title={title} closeModal={closeModal} />
        <form className={s.container} onSubmit={handleSubmit}>

            <div className={s.filedContainer}>
                <label htmlFor="videoTitle">Title (required): </label>
                <input
                    type="text"
                    name="videoTitle"
                    id="videoTitle"
                    value={formData.videoTitle}
                    onChange={handleInputChange}
                />
            </div>
            {errors.videoTitle && <span className={s.error}>{errors.videoTitle}</span>}

            <div className={s.textAreaaContiner}>
                <label htmlFor="videoDesc">Description (required): </label>
                <textarea
                    name="videoDesc"
                    id="videoDesc"
                    value={formData.videoDesc}
                    onChange={handleInputChange}
                ></textarea>
            </div>
            {errors.videoDesc && <span className={s.error}>{errors.videoDesc}</span>}

            <div className={s.btnContaienr}>
                <button type="submit" className={s.primary}>Save</button>
            </div>

        </form>
       </>
    );
};

export default VideoUploadDetails;
