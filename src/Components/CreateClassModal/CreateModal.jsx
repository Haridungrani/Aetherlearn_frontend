import React, { useState } from 'react'
import s from './CrateModal.module.css'
import { createClass } from "../../services/operation/classroom"
import LoadingSpinner from '../Spinner/Spinner'
import CodeModal from '../ShowClassCodeModal/CodeModal'

const CreateModal = ({ setOpen }) => {
    const [loading, setLoading] = useState(false)
    const [showCode, setShowCode] = useState({
        open:false,
        code:null
    })
    const [formData, setFormData] = useState({
        name: "",
        subject: "",
        description: ""
    })

    const [errors, setErrors] = useState({
        name: "",
        subject: "",
        description: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        validateField(name, value);
    };

    const validateField = (name, value) => {
        let errorMessage = '';

        if (name === 'name') {
            if (value.trim() == '') {
                errorMessage = 'name is required.';
            }
        } else if (name === 'subject') {
            if (value.trim() == '') {
                errorMessage = 'subject is required.';
            }
        } else if (name === 'description') {
            if (value.trim() == '') {
                errorMessage = 'description is required.';
            }
        }

        setErrors({ ...errors, [name]: errorMessage });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errors.name && !errors.subject && !errors.description) {
            const { name, subject, description } = formData
            createClass(name, subject, description, setLoading,setShowCode)
            console.log('Form submitted:', formData);
        }
    };

    return (
        <div className={s.fullBg}>
            <div className={s.modalBox}>
                {
                    loading ? (<LoadingSpinner />) : (
                        <>
                            <h3>Create Class</h3>
                            <div className={s.extraBox}>
                                <p>Class Name</p>
                                <div className={s.fieldContainer}>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder='Class Name'
                                        required
                                    />
                                </div>
                                {errors.name && <span className="error">{errors.name}</span>}
                            </div>

                            <div className={s.extraBox}>
                                <p>Subject</p>
                                <div className={s.fieldContainer}>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder='Subject Name'
                                        required
                                    />
                                </div>
                                {errors.subject && <span className="error">{errors.subject}</span>}
                            </div>

                            <div className={s.extraBox}>
                                <p>Description</p>
                                <div className={s.fieldContainer}>
                                    <input
                                        type="text"
                                        name="description"
                                        value={formData.description}
                                        onChange={handleChange}
                                        placeholder='Description'
                                        required
                                    />
                                </div>
                                {errors.description && <span className="error">{errors.description}</span>}
                            </div>
                            <div className={s.btnContainer}>
                                <button onClick={() => setOpen(false)}>Cancel</button>
                                <button onClick={handleSubmit}>Create</button>
                            </div>
                        </>
                    )
                }
            </div>
            {showCode.open && <CodeModal code={showCode.code} setOpen={setShowCode} setOpen2={setOpen} />}
        </div>
    )
}

export default CreateModal