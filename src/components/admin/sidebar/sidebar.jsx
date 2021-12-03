import style from './sidebar.module.css';

import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../redux/features/user/userSlice';

export default function Sidebar() {

  const user = useSelector(selectUser);

  console.log(user);

  return (
    <div className={style.container}>
      <div className={style.sidebar}>
        <div className={style.user}>
          <h1>Hello, {user.username}</h1>
          <p>Manage your personal blog</p>
        </div>
        <div className={style.navigation}>
          <NavLink activeClassName={style.active} to="/admin/about">About</NavLink>
          <NavLink activeClassName={style.active} to="/admin/blog">Blog</NavLink>
          <NavLink activeClassName={style.active} to="/admin/works">Works</NavLink>
          <NavLink activeClassName={style.active} to="/admin/skills">Skills</NavLink>
          <NavLink activeClassName={style.active} to="/admin/university">University</NavLink>
          <NavLink activeClassName={style.active} to="/admin/experience">Experience</NavLink>
        </div>
      </div>
    </div>
  )
}