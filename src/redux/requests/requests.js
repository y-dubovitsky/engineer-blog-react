const callApi = async (payload) => {
  const { url, requestBody } = payload;

  if (requestBody) {

    const body = JSON.stringify(requestBody);

    const response = await fetch(url, {
      body,
      method: payload.method,
      headers: payload.headers
    })
    const data = await response.json();
    // TODO Добавить обработку неудачного запроса!
    return data;
  }

  const response = await fetch(url);
  const data = await response.json();

  return data;
}

export default callApi;