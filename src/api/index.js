const BASE = "https://strangers-things.herokuapp.com/api";
const COHORT = "2206-FTB-ET-WEB-FT-A";

//get the posts to show
export async function retrievePosts() {
  const response = await fetch(`${BASE}/${COHORT}/posts`);
  const result = await response.json();
  return result;
}

//logging in user
export const loginUser = async (username, password) => {
  const response = await fetch(`${BASE}/${COHORT}/users/login`, {
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
  console.log(result, "response from log");
  const token = result.data.token;
  return token;
};

//no account, registering user
export const registerUser = async (username, password) => {
  const response = await fetch(`${BASE}/${COHORT}/users/register`, {
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
  localStorage.setItem("username", username);
  console.log(result);
  return result;
};

//pulling up profile
export const getProfile = async (token) => {
  const response = await fetch(`${BASE}/${COHORT}/users/me`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const result = await response.json();
  const data = result.data;
  return data;
};

//creating new posts
export const createPosts = async (token, addPost) => {
  const response = await fetch(`${BASE}/${COHORT}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      post: addPost,
    }),
  });
  const result = await response.json();
  const newPost = result.data.post;
  return newPost;
};

//deleting posts
export const deletePosts = async (token, postId) => {
  const response = await fetch(`${BASE}/${COHORT}/posts/${postId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const result = await response.json();
  return result;
};
