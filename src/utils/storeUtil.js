export const getTokenFromLocalStore = () => {
  const token = JSON.parse(localStorage.getItem('token'));
  console.log(`Current token: ${token}`);
  return token;
}

export const saveTokenToLocalStore = (tokenValue) => {
  const token = JSON.stringify(tokenValue.token); //FIXME token.token??
  console.log(`Save token: ${token}`);
  localStorage.setItem('token', token);
}

export const deleteTokenFromLocalStore = () => {
  localStorage.removeItem('token');
}