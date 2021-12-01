import cn from 'classnames';
import NavigationMenu from '../navigation-menu/navigation-menu';
import styles from './sidebar-main.module.css';

const SidebarMain = ({ isSidebarOpen }) => {

  const incomeStyle = {
    container: {
      'flex-direction': 'column',
      'color': 'white',
    },
    nav: {
      'display': 'flex',
      'flexDirection': 'column',
    }
  }

  return (
    <div className={cn(styles.container, isSidebarOpen ? styles.isOpen : '')}>
      <NavigationMenu incomeStyle={incomeStyle} />
    </div>
  )
}

export default SidebarMain;