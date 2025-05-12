import React, { createContext, useCallback, useReducer, useState, useEffect } from "react";

// JSON.stringify() ➡️ Converts a JavaScript Object ➡️ into a JSON string.

// JSON.parse() ➡️ Converts a JSON string ➡️ into a JavaScript Object.


export const PostListContext = createContext({
    postListState : [],
    addPost : () => {},
    // addMultiplePosts: () => {},
    deletePost : () => {},
    fetching : false
});

const reducer = (currPostListState, action) => {
  switch (action.type) {
    case 'DELETE_POST':
      return currPostListState.filter(
        (post) => post.id !== action.payload.postId
      );

    case 'ADD_POST':
      return [action.payload, ...currPostListState];

    case 'ADD_MULTIPLE_POSTS':
      return [...action.payload.posts]; // Ensure new array reference

    default:
      return currPostListState; // Return unchanged state
  }
};

// const DEFAULT_POST_LIST = [{
//         id : '1',
//         title : 'React Crash Course',
//         body : 'Hello frnds ,Currently Learing React From KG-Coding',
//         reactions : 7,
//         userId : 'afreed307',
//         tags : ['youtube','react','may14'],
// },]

const PostListContextProvider = ({children}) => {

    const [postListState,dispatch] = useReducer(reducer,[]);

    const addPost = (post) => {
    //    console.log(userId,postTitle,postBody,reactions,tags);
          dispatch({
            type : 'ADD_POST',
            payload : post
          })
    }

    const addMultiplePosts = (posts) => {
        dispatch({
            type : "ADD_MULTIPLE_POSTS",
            payload : {
               posts 
            }
        })
    }

    const deletePost = useCallback( (postId) => {
        console.log(`deleted post : ${postId}`);
        dispatch({
            type : 'DELETE_POST',
            payload : { postId },
        })
    },[dispatch])


      const [fetching, setFetching] = useState(true);
      const URL = 'https://dummyjson.com/posts'
      useEffect(() => {
            // setFetching(true)
            // console.log('1. fetching started');

          // 42. Advanced useEffect using AbortController()  
          const controller = new AbortController();
          const signal = controller.signal;

          fetch(URL,{signal})
            .then(resp => resp.json())
            .then(data => {
              addMultiplePosts(data.posts);
              setFetching(false);
              // console.log('3. fetching returned');
            })
          // console.log('2. fetching ended');
            .catch((error) => {
                 if (error.name === 'AbortError') {
                      console.log('Fetch aborted intentionally.');
                 } else {
                      console.error('Failed to fetch posts:', error);
                 }
            });

          // 41.useEffect Hook Cleanup
          return () => {
            // console.log("Cleaning up useEffect Before this Component Dying.");
            controller.abort();
          }
      },[])

  return (
    <PostListContext.Provider value={{ postListState, addPost, deletePost, fetching }}> 
        {children}
    </PostListContext.Provider>
  )
}

export default PostListContextProvider