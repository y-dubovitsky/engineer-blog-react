import { Route, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

function ProtectedRoute({ user, path, component }) {
  return (
    <>
      {user ?
        <Route exact path={path} component={component} />
        :
        <Redirect to="/error-page"/>
      }
    </>
  )
}

const mapStateToProps = (state, props) => ({
  user: state.auth.user
})

export default connect(mapStateToProps)(ProtectedRoute);