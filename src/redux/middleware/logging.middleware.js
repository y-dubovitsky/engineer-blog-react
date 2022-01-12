const loggingMiddleware = storeAPI => next => async action => {
  console.log(`execute action: ${action.type}`)
  return next(action)
}

export default loggingMiddleware;