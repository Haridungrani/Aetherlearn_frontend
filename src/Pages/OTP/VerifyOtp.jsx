import React, { useState,useEffect } from 'react'
import s from "../Login/Login.module.css"
import Logo from "../../assets/aetherlearn-high-resolution-logo-black-transparent.png"
import { Link } from 'react-router-dom'

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {signUp}  from '../../services/operation/authApi';


const VerifyOtp = () => {

    const [otp, setOtp] = useState(Array(6).fill(''));
    const { signupData, loading } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(()=>{
        if(!signupData){
          navigate('/signup');
        }
      });
    

    const handleChange = (e, index) => {
        const value = e.target.value;

        if (/^\d*$/.test(value) && value.length <= 1) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

            // Move to next input
            if (value && index < 5) {
                const nextInput = document.getElementById(`otp-input-${index + 1}`);
                nextInput.focus();
            }
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            // Move to previous input on backspace if current is empty
            const prevInput = document.getElementById(`otp-input-${index - 1}`);
            prevInput.focus();
        }
    };

    const submitHandler = (e)=>{
        e.preventDefault()
        console.log(otp.length)
        const { accountType,  firstName, lastName, email, password, confirmPassword, } = signupData;
        dispatch(
          signUp( accountType,  firstName, lastName, email, password, confirmPassword,  otp, navigate )
          )
    }


    return (
        <div className={s.container}>
            <div className={s.formContainer}>
                <form className={s.form}>
                    <h1>Verify Otp</h1>


                    <div className={s.otpContainer}>
                        <p>Enter one Time Password Sent to your given email</p>
                        <div className={s.otpFields}>
                            {otp.map((value, index) => (
                                <input
                                    type="text"
                                    maxLength="1"
                                    id={`otp-input-${index}`}
                                    value={value}
                                    key={index}
                                    onChange={(e) => handleChange(e, index)}
                                    onKeyDown={(e) => handleKeyDown(e, index)} />
                            ))}
                        </div>
                    </div>


                    <div className={s.btnContainer}>
                        <button type="submit" onClick={submitHandler}>Verify</button>
                    </div>
                </form>
            </div>
            <div className={s.logoContainer}>
                <div className={s.logoBox}>
                    <img src={Logo} alt="AetherLearn" />
                </div>
            </div>

        </div>
    )
}

export default VerifyOtp