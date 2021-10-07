async function sendRequest(payload) {

  const { url, requestBody } = payload;
  // https://developer.mozilla.org/ru/docs/Web/API/Fetch_API/Using_Fetch
  if (requestBody) {

    const body = JSON.stringify(requestBody);
    
    const response = await fetch(url, {
      method: 'POST',
      body: body,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json();
    return data;
  }

  const response = await fetch(url);
  const data = await response.json();

  return data;
}

export default sendRequest;