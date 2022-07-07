const BASE = 'https://strangers-things.herokuapp.com/api'
const COHORT = '2206-FTB-ET-WEB-FT-A'

export async function loginUser(username, password) {
    const response = await fetch(`${BASE}${COHORT}/users/login`, {
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
    }) .then(response => response.json())
    .then(result => {
      console.log(result);
    })
    .catch(console.error);

}