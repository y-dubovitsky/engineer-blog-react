import { connect } from 'react-redux';
import cn from 'classnames';

import style from './sign-up.module.css'

import { signUp } from '../../redux/actions/authAction';
import { useState } from 'react';

const SignUp = ({ signUp }) => {

  const [form, setForm] = useState({});

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

        <button onClick={() => signUp(form)}>Sign Up</button>
      </div>
    </div>
  )
}

export default connect(null, { signUp })(SignUp);