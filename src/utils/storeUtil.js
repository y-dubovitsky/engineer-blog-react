export const saveToLocalStore = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
  console.log(key + ' saved to localstorage');
}

//TODO Переписать этот метод!
export const getFromLocalStore = (key, subKey = null) => {
  const result = JSON.parse(localStorage.getItem(key));
  if(subKey) {
    return result[subKey];
  }
  console.log(`Get from store -> ${key}: ${result}`);
  return result;
}

export const deleteFromLocalStore = (keys) => {
  keys.forEach(key => {
    localStorage.removeItem(key);
    console.log(key + ' removed from localstore!');
  });
}