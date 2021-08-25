const BASE_URL = `http://localhost:3000/api/v1`;

export const Session = {
  create(params) {
    return fetch(`${BASE_URL}/session`, {
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      method: 'POST',
      body: JSON.stringify(params)
    }).then((res) => {
      return res.json();
    })
  },
  destroy(){
    return fetch(`${BASE_URL}/session`, {
      method: 'DELETE',
      credentials: 'include'
    })
  }
}

export const User = {
  current() {
    return fetch(`${BASE_URL}/users/current`, {
      credentials: 'include',
    }).then(res => res.json())
  },
  create(params) {
    return fetch(`${BASE_URL}/users`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user: params })
    }).then(res => res.json())
  }
}


