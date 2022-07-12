const BASE = 'https://strangers-things.herokuapp.com/api'
const COHORT = '2206-FTB-ET-WEB-FT-A'

export const loginUser = async (username, password) => {
    const response = await fetch(`${BASE}${COHORT}/users/login`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user:{
                username: username,
                password: password
            }})
    }
    )
    console.log(response, "response from log")
    const result = await response.json()
    const token = result.data.token
    return token
}

export const registerUser = async (username, password) => {
    const response = await fetch(`${BASE}${COHORT}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
        },
      }),
    });
    const result = await response.json();
    const token = result.data.token;
    localStorage.setItem("token", token);
    localStorage.setItem("username", username)
    return result
  }

export async function retrievePosts() {
  const response = await fetch(`${BASE}${COHORT}/posts`)
  const result = await response.json()
    return result
    
}

export const getProfile = async (token) => {
    const response = await fetch(`${BASE}${COHORT}/users/me`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
        }
        })
    const result = await response.json()
    const data = result.data
    return data
}

export const deletePosts = async (token, postId) => {
    const response = await fetch(`${BASE}${COHORT}/posts/${postId}`, {
    method: "DELETE",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
  })
  const result = await response.json()
  }