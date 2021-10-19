const callApi = async (payload) => {
  const { url, requestBody, headers } = payload;

  if (requestBody) {

    const body = JSON.stringify(requestBody);

    const response = await fetch(url, {
      body,
      headers,
      method: payload.method,
    })
    const data = await response.json();
    // TODO Добавить обработку неудачного запроса!
    return data;
  }

  const response = await fetch(url, { headers });
  const data = await response.json();

  return data;
}

export default callApi;