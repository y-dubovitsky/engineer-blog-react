import Dashboard from '../../components/admin/dashboard/dashboard';
import Footer from '../../components/common/footer/footer';
import Header from '../../components/admin/header/header';
import Sidebar from '../../components/admin/sidebar/sidebar';

import style from './admin-layout.module.css';

import { connect } from 'react-redux';

const AdminLayout = ({ user }) => {
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

const mapStateToProps = (state, props) => ({
  user: state.auth.user
})

export default connect(mapStateToProps)(AdminLayout);
