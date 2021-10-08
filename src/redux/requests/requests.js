const callApi = async (payload) => {
  const {url} = payload;

  const response = await fetch(url);
  const data = await response.json();

  return data;
}

export default callApi;