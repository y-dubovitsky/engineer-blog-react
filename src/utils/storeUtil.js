export const saveToLocalStore = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
  console.log(key + ' : ' + value + ' saved to localstorage');
}

//TODO Переписать этот метод!
export const getFromLocalStore = (objectName, objectKey) => {
  const item = localStorage.getItem(objectName);
  if (item) {
    console.log(`Get from store -> ${objectName}: ${objectKey}`);
    return JSON.parse(item)[objectKey];
  }
  return null;
}

export const deleteFromLocalStore = (keys) => {
  keys.forEach(key => {
    localStorage.removeItem(key);
    console.log(key + ' removed from localstore!');
  });
}