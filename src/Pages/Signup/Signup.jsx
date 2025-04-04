import React, { useState } from 'react';
import s from "../Login/Login.module.css";
import Logo from "../../assets/aetherlearn-high-resolution-logo-black-transparent.png";
import { Link, useNavigate } from 'react-router-dom';
import { setSignupData } from '../../slices/auth'
import { useDispatch,useSelector } from 'react-redux'
import { sendOtp } from "../../services/operation/authApi"
import Spinner from '../../Components/Spinner/Spinner'

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { loading } = useSelector((state) => state.auth)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    accountType: "student"
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let errorMessage = '';

    if (name === 'firstName' || name === 'lastName') {
      if (!value) {
        errorMessage = `${name.replace(/([A-Z])/g, ' $1')} is required.`;
      }
    } else if (name === 'email') {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!value) {
        errorMessage = 'Email is required.';
      } else if (!emailPattern.test(value)) {
        errorMessage = 'Please enter a valid email address.';
      }
    } else if (name === 'password') {
      if (!value) {
        errorMessage = 'Password is required.';
      } else if (value.length < 6) {
        errorMessage = 'Password must be at least 6 characters long.';
      }
    } else if (name === 'confirmPassword') {
      if (value !== formData.password) {
        errorMessage = 'Passwords do not match.';
      }
    }

    setErrors({ ...errors, [name]: errorMessage });
  };

  const accoutTypeChange = (val) => {
    setFormData({ ...formData, accountType: val })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!Object.values(errors).some((error) => error)) {
      // API Call
      dispatch(setSignupData(formData));
      dispatch(sendOtp(formData.email, navigate));
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        accountType: "student"})
    }
  };

  return (
    <div className={s.container}>
      <>
        <div className={s.formContainer}>
          {
            loading ? (<div><Spinner /></div>) : (

              <form className={s.form} onSubmit={handleSubmit}>
            <h1>Sign up</h1>
            <p>Already have an Account? <Link to="/login" className="linkFix">Sign in</Link></p>

            <div className={s.accoutBtnContainer}>
              <div className={s.btnBox}>
                <button id={formData.accountType === "student" ? s.actaviBtn : ''} onClick={(e) => { e.preventDefault(); accoutTypeChange('student'); }}>Student</button>
                <button id={formData.accountType === "faculty" ? s.actaviBtn : ''} onClick={(e) => { e.preventDefault(); accoutTypeChange('faculty'); }}>Faculty</button>
              </div>
            </div>

            <div className={s.fieldContainer}>
              <p>First Name :</p>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              {errors.firstName && <span className="error">{errors.firstName}</span>}
            </div>

            <div className={s.fieldContainer}>
              <p>Last Name :</p>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
              {errors.lastName && <span className="error">{errors.lastName}</span>}
            </div>

            <div className={s.fieldContainer}>
              <p>Email :</p>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>

            <div className={s.fieldContainer}>
              <p>Password :</p>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              {errors.password && <span className="error">{errors.password}</span>}
            </div>

            <div className={s.fieldContainer}>
              <p>Confirm Password :</p>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
            </div>

            <div className={s.btnContainer}>
              <button type="submit">Sign up</button>
            </div>
          </form>

            )
          }
        </div>
        <div className={s.logoContainer}>
          <div className={s.logoBox}>
            <img src={Logo} alt="AetherLearn" />
          </div>
        </div>
      </>
    </div>
  );
}

export default Signup;
