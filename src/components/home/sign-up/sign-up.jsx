import { useDispatch } from 'react-redux';
import cn from 'classnames';

import style from './sign-up.module.css'

import { registration } from '../../../redux/features/auth/authSlice';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {

  const [form, setForm] = useState({});
  const dispatch = useDispatch();

  const handleFormChange = (e) => {
    e.preventDefault();

    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className={cn(style.container)}>
      <div className={cn(style.form)}>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" onChange={handleFormChange} />

        <label htmlFor="email">Email</label>
        <input type="text" name="email" onChange={handleFormChange} />

        <label htmlFor="password">Password</label>
        <input type="password" name="password" onChange={handleFormChange} />

        <label htmlFor="confirm">Confirm Password</label>
        <input type="password" name="confirm" onChange={handleFormChange} />

        <button onClick={() => dispatch(registration(form))}>Sign Up</button>
      </div>
      <Link to="/main"><i className={cn("fas fa-times-circle", style.closeBtn)}></i></Link>
    </div>
  )
}

export default SignUp;