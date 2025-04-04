import React, { useEffect, useState } from 'react';
import s from './EditTextEditor.module.css';
import { useParams } from "react-router-dom";
import { editPost, getPostById } from '../../services/operation/post';
import DialogTitlebar from '../UploadVideoPopup/DialogTitlebar';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import LoadingSpinner from '../Spinner/Spinner';
import { getQueryParam } from '../../utils/queryFunction';

const EditTextEditor = ({ loading, setLoading, closeModal }) => {   

    const id= getQueryParam('id');

    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        description: '',
    });

    const handleInputChange = (value) => {
        setFormData((prevData) => ({
            ...prevData,
            description: value,
        }));
        console.log(formData);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};
        const strippedDescription = formData.description.replace(/<[^>]*>/g, '').trim();
        // Validation
        if (!strippedDescription) {
            newErrors.description = 'Description is required';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            // Submit the form or perform the save action
            console.log('Form submitted:', formData);
            editPost(formData.description.trim(), id, setLoading, closeModal);

            setFormData({ description: '' });
            setErrors({});
        }
    };

    useEffect( ()=>{
        getPostById(id,setLoading,setFormData)
    },[]);


    return (
        <>
            <DialogTitlebar loading={loading} title={"Edit Post"} closeModal={closeModal} />
            {
                loading ? (<div className={s.loadingContainer}><LoadingSpinner /><p>Buckle up! We’re diving into your Post!</p></div>) : (

                    <form className={s.container} onSubmit={handleSubmit}>
                        <ReactQuill
                            theme="snow"
                            value={formData.description}
                            onChange={handleInputChange}
                            placeholder="Enter text here..."
                            name="description"
                            className={s.textEditor}
                        />
                        {errors.description && <span className={s.error}>{errors.description}</span>}

                        <div className={s.btnContaienr}>
                            <button type="submit" className={s.primary}>Save</button>
                        </div>
                </form>
                ) 
            }
        </>
    )
}

export default EditTextEditor


