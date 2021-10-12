import { connect } from 'react-redux';
import cn from 'classnames';

import style from './sign-in.module.css'

import { signIn } from '../../redux/actions/authAction';
import { useState } from 'react';

const SignIn = ({ signIn, user }) => {

  const [form, setForm] = useState({});

  const handleFormChange = (e) => {
    e.preventDefault();

    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  console.log(user);

  return (
    <div className={cn(style.container)}>
      <div className={cn(style.form)}>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" onChange={handleFormChange} />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" onChange={handleFormChange} />
        <button onClick={() => signIn(form)}>Sign In</button>
      </div>
    </div>
  )
}

const mapStateToProps = (state, props) => {
  return {
    user: state.auth
  }
}

export default connect(null, { signIn })(SignIn);