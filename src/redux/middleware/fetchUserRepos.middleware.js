//TODO Переписать эту мидлварь!

//https://redux.js.org/tutorials/fundamentals/part-4-store#middleware
const fetchUserReposMiddleware = storeAPI => next => async action => {
  if (action.type === 'user/get-user-info/fulfilled') {
    const { githubProfileName } = action.payload;

    try {
      const response = await fetch(`https://api.github.com/users/${githubProfileName}/repos`);
      if (response.status !== 404 || response.status !== '404') {
        const json = await response.json();
        //TODO Можно ли тут прям так добавлять в payload данные?
        action.payload.repos = json;
      }
    } catch (err) {
      console.log(`fetchUserReposMiddleware stopped with error: ${err}`)
    }

    return next(action)
  }
}

export default fetchUserReposMiddleware;