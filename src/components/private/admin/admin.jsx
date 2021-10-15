import cn from 'classnames';
import Dashboard from '../dashboard/dashboard';
import Footer from '../footer/footer';
import Header from '../header/header';
import Sidebar from '../sidebar/sidebar';
import style from './admin.module.css';

import { connect } from 'react-redux';

function Admin({ user }) {

  return (
    <div className={cn(style.container)}>
      <Header user={user} />
      <Sidebar user={user} />
      <Dashboard />
      <Footer />
    </div>
  )
}

const mapStateToProps = (state, props) => ({
  user: state.auth.user
})

export default connect(mapStateToProps)(Admin);