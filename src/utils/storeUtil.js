export const saveToLocalStore = (key, value) => {
  console.log(key + ' saved to localstorage');
  localStorage.setItem(key, value);
}

export const getFromLocalStore = (key) => {
  const result = JSON.parse(localStorage.getItem(key));
  console.log(`Get from store -> ${key}: ${result}`);
  return result;
}

export const deleteFromLocalStore = (keys) => {
  keys.forEach(key => {
    localStorage.removeItem(key);
    console.log(key + ' removed from localstore!');
  });
}