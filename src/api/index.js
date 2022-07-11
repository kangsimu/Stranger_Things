const BASE = 'https://strangers-things.herokuapp.com/api'
const COHORT = '2206-FTB-ET-WEB-FT-A'

export const loginUser = async (username, password) => {
    const response = await fetch(`${BASE + COHORT}/users/login`,
    {
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

export const getProfile = async(token) => {
    const response = await fetch(`${API_URL + COHORT}/users/me`,
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
        }
        })
    const result = await response.json()
    const data = result.data
    return data
}

export const registerPerson = async (username, password) => {
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