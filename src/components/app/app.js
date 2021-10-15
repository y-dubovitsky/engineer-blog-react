import cn from 'classnames';
import { Switch, Route, Redirect } from 'react-router';
import Admin from '../private/admin/admin';
import Main from '../public/main/main';
import ErrorPage from '../public/error-page/error-page';
import ProtectedRoute from '../../wrappers/protected-route';
import style from './app.module.css';

function App(props) {

  return (
    <div className={cn(style.container)}>
      <Switch>
        <Route path="/main" component={Main} />
        <Route path="/error-page" component={ErrorPage} />
        <ProtectedRoute path="/admin" component={Admin} />
        <Redirect to="/main" />
      </Switch>
    </div>
  );
}

export default App;
