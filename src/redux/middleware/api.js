import callApi from "../requests/requests";

export default store => next => async action => {

  if(!action.payload) next(action);

  const data = await callApi(action.payload);

  next({
    ...action,
    data
  })
}