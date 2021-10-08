import cn from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import style from './header.module.css'

const Header = () => {
  return (
    <div className={cn(style.container)}>
      <div className={cn(style.logo)}>Логотип</div>
      <ul className={cn(style.nav)}>
        <li>
          <input type="text" name="" id="" placeholder="Search..." />
          <i><FontAwesomeIcon icon={faSearch} /></i>
        </li>
        <li>Главная</li>
        <li>Контакты</li>
        <li>Войти</li>
      </ul>
    </div>
  )
}

export default Header;