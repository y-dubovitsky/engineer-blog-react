import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {selectUser} from '../redux/features/user/userSlice';

function ProtectedRoute({ path, component }) {

  const user = useSelector(selectUser);

  return (
    user ?
      <Route path={path} component={component} />
      :
      <Redirect to="/error-page" />
  )
}

export default ProtectedRoute;