import cn from 'classnames';
import { Redirect, Route, Switch } from 'react-router';
import style from './app.module.css';
import ErrorPage from './components/common/error-page/error-page';
import AdminLayout from './layouts/admin-layout/admin-layout';
import HomeLayout from './layouts/home-layout/home-layout';
import UserProfileLayout from './layouts/user-profile-layout/user-profile-layout';
import ProtectedRoute from './wrappers/protected-route';
import { loadAuthFromLocalStorage } from './redux/features/auth/authSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

function App(props) {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAuthFromLocalStorage())
  }, []);

  return (
    <div className={cn(style.container)}>
      <Switch>
        {/* TODO Что то тут не так */}
        <Route path="/home" component={HomeLayout} />
        <Route path="/user-profile" component={UserProfileLayout} />
        <ProtectedRoute path="/admin" component={AdminLayout} />
        <Route path="/error-page" component={ErrorPage} />
        <Redirect to="/home" />
      </Switch>
    </div>
  );
}

export default App;
