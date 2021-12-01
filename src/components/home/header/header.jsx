import { useState } from 'react';
import NavigationMenu from '../navigation-menu/navigation-menu';
import SidebarMain from '../sidebar-main/sidebar-main';
import styles from './header.module.css';

const Header = (props) => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className={styles.container}>
      <SidebarMain isSidebarOpen={isSidebarOpen} />
      <div className={styles.logo}>LOGO</div>
      <div className={styles.navContainer}>
        <NavigationMenu />
      </div>
      <div className={styles.menu} onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
        <i className="fas fa-bars"></i>
      </div>
    </div>
  )
};

export default Header;