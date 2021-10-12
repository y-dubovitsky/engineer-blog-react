import cn from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import style from './header.module.css'

import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

const Header = ({ auth }) => {

  console.log(auth)

  return (
    <div className={cn(style.container)}>
      <div className={cn(style.logo)}>Логотип</div>
      <ul className={cn(style.nav)}>
        <li>
          <input type="text" name="" id="" placeholder="Search..." />
          <i><FontAwesomeIcon icon={faSearch} /></i>
        </li>
        <li><Link to="/posts">Главная</Link></li>
        <li><Link to="/about">О Блоке</Link></li>
        <li><Link to="/contacts">Контакты</Link></li>
        {auth.username ?
          <li><Link to="/sign-in">Выйти</Link></li>
          :
          <>
            <li><Link to="/sign-up">Зарегистрироваться</Link></li>
            <li><Link to="/sign-in">Войти</Link></li>
          </>
        }
      </ul>
    </div>
  )
}

const mapStateToProps = (state, props) => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(Header);