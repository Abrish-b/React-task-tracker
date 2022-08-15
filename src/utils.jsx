export const getResponse = (url) => { 
  return fetch(url).then(res => res.json())
}

export const sendResponse = (url, data) => {
  return fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
      },
    body: JSON.stringify(data)
  }).then(res => res.json())
}

export const deleteData = (url, id) => {
    return fetch(url + '/' + id, {
      method: 'DELETE'
    }).then(res => res.json())
  }