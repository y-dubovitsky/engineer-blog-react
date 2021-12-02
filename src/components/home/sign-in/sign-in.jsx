import { connect } from 'react-redux';
import cn from 'classnames';

import style from './sign-in.module.css'

import { signIn } from '../../../redux/actions/authAction';
import { useEffect, useState } from 'react';
import { withRouter, Link, useRouteMatch } from 'react-router-dom';

const SignIn = ({ signIn, user, history }) => { // withRouter -> history -> используем History API

  const [form, setForm] = useState({});
  const match = useRouteMatch();

  useEffect(() => {
    if (user) {
      redirectOnSuccess();
    }
  }, [user])

  const handleFormChange = (e) => {
    e.preventDefault();

    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const redirectOnSuccess = () => {
    history.replace(match.path);
    //TODO Пользователя по id получаем!
    history.push(`/user-profile/${user.username}`);
  }

  const getPreviousUrl = () => {
    return match.path.replace("/sign-in", "");
  }

  return (
    <div className={cn(style.container)}>
      <div className={cn(style.form)}>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" onChange={handleFormChange} />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" onChange={handleFormChange} />
        <button onClick={() => signIn(form)}>Sign In</button>
      </div>
      <Link to={getPreviousUrl}><i className={cn("fas fa-times-circle", style.closeBtn)}></i></Link>
    </div>
  )
}

const mapStateToProps = (state, props) => {
  return {
    user: state.auth.user
  }
}

export default connect(mapStateToProps, { signIn })(withRouter(SignIn)); // Тут тоже нужно обернуть!