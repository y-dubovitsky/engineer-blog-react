import { Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, loadUserFromLocalStorage } from '../redux/features/user/userSlice';

function ProtectedRoute({ path, component }) {

  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  if (!user) {
    dispatch(loadUserFromLocalStorage())
  }

  return (
    user ?
      <Route path={path} component={component} />
      :
      <Redirect to="/error-page" />
  )
}

export default ProtectedRoute;