import cn from 'classnames';
import { Switch, Route, Redirect } from 'react-router';
import Admin from '../admin/admin';
import Main from '../main/main';
import style from './app.module.css';

import { connect } from 'react-redux';

function App({ user }) {

  return (
    <div className={cn(style.container)}>
      <Switch>
        <Route path="/main" component={Main} />
        {/* TODO Сделать Обертку для Route! */}
        {user ?
          <Route exact path="/admin" component={Admin} />
          :
          ''
        }
        <Redirect to="/main" />
      </Switch>
    </div>
  );
}

const mapStateToProps = (state, props) => (
  {
    user: state.auth.user
  }
)

export default connect(mapStateToProps)(App);
