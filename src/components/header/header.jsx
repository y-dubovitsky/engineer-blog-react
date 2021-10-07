import cn from 'classnames';

import style from './header.module.css'

const Header = () => {
  return (
    <div className={cn(style.header)}>
      <div className={cn(style.logo)}>Логотип</div>
      <ul className={cn(style.nav)}>
        <li><input type="text" name="" id="" /></li>
        <li>Главная</li>
        <li>Контакты</li>
        <li>Войти</li>
      </ul>
    </div>
  )
}

export default Header;