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
  },
  
}

export const Vehicle = {
  index() {
    return fetch(`${BASE_URL}/vehicles`, {
      credentials: "include",
      headers: {
        "Cache-Control": "no-cache",
      },
    }).then((res) => {
      return res.json();
    });
  },
  create(id, params) {
    return fetch(`${BASE_URL}/users/${id}/vehicles`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    })
      .then((res) => res.json())
    
  }

}

export const ServiceRequest = {
  index(){
    return fetch(`${BASE_URL}/service_requests`,{
      credentials: 'include'

    })

    .then(res => {
        console.log(res);
        return res.json();
    })
},
create(id, params) {
  return fetch(`${BASE_URL}/vehicles/${id}/service_requests`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  })
    .then((res) => res.json())
  
}

  
}

export const ServiceOffer = {
  create(id, params){
    console.log(params, id)
    return fetch(`${BASE_URL}/service_requests/${id}/service_offers`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    })
      .then((res) => res.json())
    
  },
// for mechanic page
  index() {
    return fetch(`${BASE_URL}/service_offers`, {
      credentials: "include",
      headers: {
        "Cache-Control": "no-cache",
      },
    }).then((res) => {
      return res.json();
    });
  },
  // for vehicle owner page
  
}

export const CustomerDashboard = {
  index(){
    return fetch(`${BASE_URL}/customers`, {
      credentials: "include",
      headers: {
        "Cache-Control": "no-cache",
      },
    }).then((res) => {
      console.log(res)
      return res.json();
    });
  },
  }

export const Appointment = {
  create(id, params){
    console.log(params, id)
    return fetch(`${BASE_URL}/service_offers/${id}/appointment`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    })
      .then((res) => res.json())
    
  },

  index(){
    return fetch(`${BASE_URL}/appointment`,{
      credentials: 'include'

    })

    .then(res => {
        console.log(res);
        return res.json();
    })
},

}


export const IndexByMechanic = {
  index(){

  return fetch(`${BASE_URL}/indexByMechanic`, {
    credentials: "include",
    headers: {
      "Cache-Control": "no-cache",
    },
  }).then((res) => {
    console.log(res)
    return res.json();
  });
},}
