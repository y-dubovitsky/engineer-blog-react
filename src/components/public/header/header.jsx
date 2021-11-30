import styles from './header.module.css';

const Header = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>LOGO</div>
      <div className={styles.navContainer}>
        <div className={styles.nav}>
          <ul>
            <li>About</li>
            <li>Contacts</li>
            <li>Top Rated Specialist</li>
          </ul>
        </div>
        <div className={styles.auth}>
          <div className="">Sign In</div>
          <div className="">Registration</div>
        </div>
      </div>
      <div className={styles.menu}>
        <i className="fas fa-bars"></i>
      </div>
    </div>
  )
};

export default Header;