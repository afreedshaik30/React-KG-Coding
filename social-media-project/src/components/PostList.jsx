import React, { useContext } from "react";
import Post from "./Post";
import Msg from "./Msg";
import { PostListContext } from "../store/post-list-store";

const PostList = () => {
  const { postListState,addMultiplePosts } = useContext(PostListContext);

  const handlefetchPostsData = () => {
    console.log("get posts clicked");
    fetch("https://dummyjson.com/posts") 
    // 1. Makes a GET request to the given API URL. A Promise that resolves to a Response object if the network request is successful.
      .then((res) => res.json()) // 2. parse the Response Object
      .then((data) => {
        addMultiplePosts(data.posts)
      }) // 3. post from data(parsed res obj)
      // 2.a res is A Response object from fetch
      // 3.a data is A parsed response object created by res.json() — it’s the actual data from the server
      .catch((error) => {
        console.error("Failed to fetch posts:", error);
      });
  };
  
  return (
    <>
      {postListState.length === 0 && (
        <Msg onClickfetchPostsData={handlefetchPostsData} />
      )}
      {postListState.map((p) => (
        <Post key={p.id} postData={p} />
      ))}
    </>
  );
};

export default PostList;
