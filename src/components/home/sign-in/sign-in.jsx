import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';

import style from './sign-in.module.css'

import { login } from '../../../redux/features/user/userSlice';
import { useEffect, useState } from 'react';
import { withRouter, Link, useRouteMatch } from 'react-router-dom';

const SignIn = ({ history }) => { // withRouter -> history -> используем History API

  const [form, setForm] = useState({});
  const match = useRouteMatch();
  const dispatch = useDispatch();

  const user = useSelector(state => state.user.user);

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
        <button onClick={() => dispatch(login(form))}>Sign In</button>
      </div>
      <Link to={getPreviousUrl}><i className={cn("fas fa-times-circle", style.closeBtn)}></i></Link>
    </div>
  )
}


export default withRouter(SignIn);