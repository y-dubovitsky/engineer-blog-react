import cn from 'classnames';
import { Switch, Route, Redirect } from 'react-router';
import ErrorPage from './components/public/error-page/error-page';
import ProtectedRoute from './wrappers/protected-route';
import style from './app.module.css';
import HomeLayout from './layouts/home-layout/home-layout';
import AdminLayout from './layouts/admin-layout/admin-layout';
import UserProfileLayout from './layouts/user-profile-layout/user-profile-layout';

function App(props) {

  return (
    <div className={cn(style.container)}>
      <Switch>
        <Route path="/" exact={true} component={HomeLayout} />
        {/* TODO Добавить в адресную строку ссылку на текущего пользователя! */}
        <Route path="/user-profile" component={UserProfileLayout} />
        <ProtectedRoute path="/admin" component={AdminLayout} />
        <Route path="/error-page" component={ErrorPage} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
