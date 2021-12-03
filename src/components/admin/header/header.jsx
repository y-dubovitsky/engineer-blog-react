import { useDispatch, useSelector } from "react-redux";
import { deleteFromLocalStore } from "../../../utils/storeUtil";
import { Link, withRouter } from 'react-router-dom';
import { logout, selectUser } from '../../../redux/features/user/userSlice'

import style from "./header.module.css";

function Header({ history }) {

  const dispatch = useDispatch();
  const user = useSelector(selectUser); //TODO Тут это не нужно!

  //TODO Вынести в утилитный класс?
  const endSession = () => {
    dispatch(logout());
    history.push("/main");
    deleteFromLocalStore(['user']);
  }

  return (
    <div className={style.container}>
      <div className={style.logo}>
        <i className="fas fa-users-cog"></i>
      </div>
      <div className={style.nav}>
        <Link to="/main">Go to Main Page <i className="fas fa-home"></i></Link>
        <a onClick={endSession}>Exit<i className="fas fa-sign-out-alt"></i></a>
      </div>
    </div>
  )
}

export default withRouter(Header);