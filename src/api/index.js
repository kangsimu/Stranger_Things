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