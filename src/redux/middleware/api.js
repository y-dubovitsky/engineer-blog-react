import sendRequest from '../api/requests';

export default store => next => async action => {
  if (!action.payload) return next(action);

  const { payload } = action;

  const data = await sendRequest(payload);
  console.log(data);

  next({
    data,
    ...action
  });
}