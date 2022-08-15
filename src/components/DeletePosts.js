import React, { useEffect } from "react";
import { deletePosts, retrievePosts } from "../api";

const DeletePosts = ({
  post,
  posts,
  setPosts,
  filteredPosts,
  setFilteredPosts,
}) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const postId = post._id;
    await deletePosts(token, postId);
    const newPost = await retrievePosts();
    if (filteredPosts.length) {
      const resultFilteredPost = filteredPosts.filter((element) => {
        if (element._id === postId) {
          return false;
        } else {
          return true;
        }
      });
      setFilteredPosts(resultFilteredPost);
    }
    setPosts(newPost);
  };

  useEffect(() => {}, [posts]);

  return (
    <form onSubmit={handleSubmit}>
      <button type="Submit">Delete</button>
    </form>
  );
};

export default DeletePosts;
