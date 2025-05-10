import React, { useContext, useState, useEffect } from "react";
import Post from "./Post";
import Msg from "./Msg";
import { PostListContext } from "../store/post-list-store";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postListState,addMultiplePosts } = useContext(PostListContext);

  // const [dataFetch,setDataFetch] = useState(false);

  // if (!dataFetch) {
  //   fetch("https://dummyjson.com/posts")
  //   .then(resp => resp.json())
  //   .then(data => addMultiplePosts(data.posts))

  //   setDataFetch(true)
  // }


  // const handlefetchPostsData = () => {
    // console.log("get posts clicked");
    // fetch("https://dummyjson.com/posts") 
    // // 1. Makes a GET request to the given API URL. A Promise that resolves to a Response object if the network request is successful.
    //   .then((res) => res.json()) // 2. parse the Response Object
    //   .then((data) => {
    //     addMultiplePosts(data.posts)
    //   }) // 3. post from data(parsed res obj)
    //   // 2.a res is A Response object from fetch
    //   // 3.a data is A parsed response object created by res.json() — it’s the actual data from the server
    //   .catch((error) => {
    //     console.error("Failed to fetch posts:", error);
    //   });
  // };
  
      const [fetching, setFetching] = useState(true);

      const URL = 'https://dummyjson.com/posts'
      useEffect(() => {
            // setFetching(true)
            // console.log('1. fetching started');

          // 42. Advanced useEffect using AbortController()  
          const contoller = new AbortController();
          const signal = contoller.signal;

          fetch(URL,{signal})
            .then(resp => resp.json())
            .then(data => {
              addMultiplePosts(data.posts);
              setFetching(false);
              // console.log('3. fetching returned');
            })
          // console.log('2. fetching ended');

          // 41.useEffect Hook Cleanup
          return () => {
            console.log("Cleaning up useEffect Before this Component Dying.");
            contoller.abort();
          }
      },[])
   
  return (
    <>
      {fetching && <LoadingSpinner/>}
      {!fetching && postListState.length === 0 && (<Msg />)}
      {!fetching && postListState.map((p) => (
        <Post key={p.id} postData={p} />
      ))}
    </>
  );
};

export default PostList;
