import Dashboard from '../../components/admin/dashboard/dashboard';
import Footer from '../../components/common/footer/footer';
import Header from '../../components/admin/header/header';
import Sidebar from '../../components/admin/sidebar/sidebar';

import style from './admin-layout.module.css';

import { useSelector } from 'react-redux';
import {selectUser} from '../../redux/features/user/userSlice';

const AdminLayout = () => {

  const user = useSelector(selectUser);

  return (
    <div className={style.container}>
      <Header user={user} />
      <Sidebar user={user} />
      <Dashboard />
      <div className={style.footerContainer}>
        <Footer />
      </div>
    </div>
  )
}

export default AdminLayout;
