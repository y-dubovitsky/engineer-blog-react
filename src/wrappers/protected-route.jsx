import { Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectAuthUsername, loadAuthFromLocalStorage } from '../redux/features/auth/authSlice';

function ProtectedRoute({ path, component }) {

  const dispatch = useDispatch();
  const auth = useSelector(selectAuthUsername);

  if (!auth) {
    dispatch(loadAuthFromLocalStorage())
  }

  return (
    auth ?
      <Route path={path} component={component} />
      :
      <Redirect to="/error-page" />
  )
}

export default ProtectedRoute;