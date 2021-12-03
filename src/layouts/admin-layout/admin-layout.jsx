import Dashboard from '../../components/admin/dashboard/dashboard';
import Footer from '../../components/common/footer/footer';
import Header from '../../components/admin/header/header';
import Sidebar from '../../components/admin/sidebar/sidebar';

import style from './admin-layout.module.css';

const AdminLayout = () => {

  return (
    <div className={style.container}>
      <Header />
      <Sidebar />
      <Dashboard />
      <div className={style.footerContainer}>
        <Footer />
      </div>
    </div>
  )
}

export default AdminLayout;
