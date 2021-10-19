import { connect } from "react-redux";
import { deleteTokenFromLocalStore } from "../../../utils/storeUtil";
import { Link, withRouter } from 'react-router-dom';
import { signOut } from '../../../redux/actions/authAction';

import style from "./header.module.css";

function Header({ history, signOut }) {

  //TODO Стереть еще и пользователя из state.auth
  const endSession = () => {
    deleteTokenFromLocalStore();
    signOut();
    history.push("/main");
  }

  return (
    <div className={style.container}>
      <div className={style.logo}>
        <i class="fas fa-users-cog"></i>
      </div>
      <div className={style.nav}>
        <Link to="/main">Go to Main Page <i class="fas fa-home"></i></Link>
        <a onClick={endSession}>Exit<i className="fas fa-sign-out-alt"></i></a>
      </div>
    </div>
  )
}

export default withRouter(connect(null, { signOut })(Header));