import { useSelector } from 'react-redux';
import { selectAuthUsername } from '../../../redux/features/auth/authSlice';

import cn from 'classnames';
import { Link } from 'react-router-dom';
import styles from './navigation-menu.module.css';

const NavigationMenu = (props) => {

  const auth = useSelector(selectAuthUsername);

  return (
    <div className={cn(styles.container)} style={{ ...props.incomeStyle?.container }} >
      <div className={styles.nav} style={{ ...props.incomeStyle?.nav }}>
        {auth ?
          null
          :
          <div className=""><Link to="/home/sign-up">Registration</Link></div>
        }
        <div className=""><Link to="/home/sign-in">Sign In</Link></div>
        <div className="">Top Rated</div>
        <div className="">Contacts</div>
        <div className="">About</div>
      </div>
    </div>
  )
}

export default NavigationMenu;