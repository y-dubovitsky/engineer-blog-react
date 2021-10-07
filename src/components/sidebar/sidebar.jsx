  
import cn from 'classnames';
import {useState} from 'react';

import style from './sidebar.module.css'

const Sidebar = () => {

  const [active, setActive] = useState(true);

  const handleSideBar = (e) => {
    setActive(!active);
  }

  return(
    <div onClick={handleSideBar} className={cn(style.sidebar, active ? style.active : '')}>
      <ul>
        <li>Home</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Java</li>
      </ul>
    </div>
  )
}

export default Sidebar;