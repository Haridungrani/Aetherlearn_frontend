import React, { useState } from 'react';
import s from "./Login.module.css";
import Logo from "../../assets/aetherlearn-high-resolution-logo-black-transparent.png";
import { Link } from 'react-router-dom'; import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../../services/operation/authApi'

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let errorMessage = '';

    if (name === 'email') {
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
    }

    setErrors({ ...errors, [name]: errorMessage });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errors.email && !errors.password) {
      const { email, password } = formData
      dispatch(login(email, password, navigate))
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div className={s.container}>
      <div className={s.formContainer}>
        <form className={s.form} onSubmit={handleSubmit}>
          <h1>Sign in</h1>
          <p>You don't have an account? <Link to="/signup" className='linkFix'>Sign Up</Link></p>

          <div className={s.fieldContainer}>
            <p>Email :</p>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder='johndoe@gmail.com'
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
              placeholder='Minimum 6 Character long'
              required
            />
            {errors.password && <span className="error">{errors.password}</span>}
          </div>

          <div className={s.btnContainer}>
            <button type="submit">22DIT013</button>
          </div>
        </form>
      </div>
      <div className={s.logoContainer}>
        <div className={s.logoBox}>
          <img src={Logo} alt="AetherLearn" />
        </div>
      </div>
    </div>
  );
}

export default Login;
