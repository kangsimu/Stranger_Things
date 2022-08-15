import { useState, useEffect } from "react";
import { deletePosts, retrievePosts } from "../api";
import { NavLink } from "react-router-dom";

const Posts = ({ searchPosts, setSearchPosts }) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(
      "https://strangers-things.herokuapp.com/api/2206-FTB-ET-WEB-FT-A/posts"
    )
      .then((response) => response.json())
      .then((result) => {
        setPosts(result.data.posts);
      })
      .catch(console.error);
  }, []);
  const sendPosts = posts.map((post, index) => (
    <div key={index} className="posts">
      <h2>{post.title}</h2>
      <p>{post.description}</p>
      <p>
        <b>Price: </b>
        {post.price}
      </p>
      <h3>{post.author.username}</h3>
      <p>
        <b>Location: </b>
        {post.location}
      </p>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  ));
  function handleEdit() {
    let token = localStorage.getItem("token");
    setPosts(token);
  }
  function handleDelete() {
    let token = localStorage.getItem("token")
    deletePosts(token);
  }
  return (
    <div>
      <NavLink to="/AddPosts">(ADD POST)</NavLink>
      <div>{sendPosts}</div>
      <h1>Posts</h1>
      <input
        name="search-posts"
        type="text"
        value={searchPosts}
        placeholder="Search Posts"
        onChange={(event) => {
          setSearchPosts(event.target.value);
        }}
      />
    </div>
  );
};

export default Posts;
