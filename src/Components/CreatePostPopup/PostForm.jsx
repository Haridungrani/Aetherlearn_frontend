import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import { createPost } from '../../services/operation/post';
import DialogTitlebar from '../UploadVideoPopup/DialogTitlebar';
import s from './PostForm.module.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const PostForm = ({ loading, setLoading, closeModal}) => {

    const [formData, setFormData] = useState({
        description: '',
    });
    const { classroomID } = useParams();
    const [errors, setErrors] = useState({});

    // Update this function to take `value` directly instead of destructuring from `e.target`
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
            createPost(formData.description.trim(), classroomID, setLoading, closeModal);

            setFormData({ description: '' });
            setErrors({});
        }
    };

    return (
       <>
            <DialogTitlebar loading={loading} title={"Post"} closeModal={closeModal} />
            <form className={s.container} onSubmit={handleSubmit}>

                {/* <div className={s.textAreaaContiner}>
                    <label htmlFor="description">Description (required): </label>
                    <ReactQuill
                        theme="snow"
                        value={formData.description}
                        onChange={handleInputChange}
                        placeholder="Enter text here..."
                        name="description"
                        className={s.textEditor}
                    />
                </div> */}
                
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
       </>
    );
}

export default PostForm;
