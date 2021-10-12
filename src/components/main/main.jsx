
import cn from 'classnames';

import { connect } from 'react-redux';

import style from './main.module.css';
import { Route, Redirect, Switch } from 'react-router-dom';
import PostList from '../post-list/post-list';
import Contacts from '../contacts/contacts';
import SignIn from '../sign-in/sign-in';
import SignUp from '../sign-up/sign-up';
import About from '../about/about';
import PostForm from '../post-form/post-form';
import Sidebar from '../sidebar/sidebar';

function Main({ auth }) {
  return (
    <div className={cn(style.container)}>
      {auth.username ?
        <Sidebar />
        :
        ''
      }
      <Switch>
        <Route path="/" exact component={PostList} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/about" component={About} />
        <Route path="/posts" component={PostList} />
        <Route path="/post-form" component={PostForm} />
      </Switch>
    </div>
  )
}

const mapStateToProps = (state, props) => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(Main);