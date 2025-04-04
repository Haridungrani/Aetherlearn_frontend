import React, { useState } from 'react';
import s from './JoinModal.module.css';
import {joinClass} from "../../services/operation/classroom"

const JoinModal = ({ setOpen }) => {
    const [classCode, setClassCode] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setClassCode(e.target.value);
        if (e.target.value.trim() === '') {
            setError('Class code is required.');
        } else {
            setError('');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (classCode.trim() === '') {
            setError('Class code is required.');
            return;
        }
        
        //API Call
        joinClass(classCode , setLoading,setOpen)
    };

    return (
        <div className={s.fullBg}>
            <div className={s.modalBox}>
                <h3>Join Class</h3>
                <div className={s.extraBox}>
                    <p>Class Code</p>
                    <p>Ask your teacher for the class code, then enter it here.</p>
                    <div className={s.fieldContainer}>
                        <input
                            type="text"
                            name="classCode"
                            value={classCode}
                            onChange={handleChange}
                            placeholder='Enter your code'
                            required
                        />
                    </div>
                    {error && <span className="error">{error}</span>}
                </div>
                <div className={s.btnContainer}>
                    <button onClick={() => setOpen(false)}>Cancel</button>
                    <button onClick={handleSubmit} disabled={loading}>
                        {loading ? 'Joining...' : 'Join'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default JoinModal;
