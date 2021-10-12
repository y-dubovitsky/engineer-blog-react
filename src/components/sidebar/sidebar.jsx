import cn from 'classnames';

import style from './sidebar.module.css';

import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className={cn(style.container)}>
      <ul>
        <li><Link to="/post-form">Добавить Пост!</Link></li>
      </ul>
    </div>
  )
}

export default Sidebar;