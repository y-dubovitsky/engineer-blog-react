import style from './sidebar.module.css';

import { NavLink } from 'react-router-dom';

export default function Sidebar({ user }) {

  const { username } = user;

  return (
    <div className={style.container}>
      <div className={style.sidebar}>
        <div className={style.user}>
          <h1>Hello, {username}</h1>
          <p>Manage your personal blog</p>
        </div>
        <div className={style.navigation}>
          <NavLink activeClassName={style.active} to="/admin/blog">Blog</NavLink>
          <NavLink activeClassName={style.active} to="/admin/works">Works</NavLink>
          <NavLink activeClassName={style.active} to="/admin/skills">Skills</NavLink>
          <NavLink activeClassName={style.active} to="/admin/education">Education</NavLink>
          <NavLink activeClassName={style.active} to="/admin/experience">Experience</NavLink>
        </div>
      </div>
    </div>
  )
}