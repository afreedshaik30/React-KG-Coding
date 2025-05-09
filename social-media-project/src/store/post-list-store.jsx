import React, { createContext, useReducer } from "react";

export const PostListContext = createContext({
    postListState : [],
    addPost : () => {},
    addMultiplePosts: () => {},
    deletePost : () => {}
});

const reducer = (currPostListState,action) =>{
    let newPostList = currPostListState
    switch (action.type) {
        case 'DELETE_POST':
            newPostList = currPostListState.filter(
                (post) => post.id !== action.payload.postId
            );    
            return newPostList;
        case 'ADD_POST':
            newPostList = [action.payload,...currPostListState] 
            return newPostList;
        case 'ADD_MULTIPLE_POSTS':
            newPostList = action.payload.posts;
            return newPostList;   
        default:
            return newPostList;
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

    const addPost = (userId,postTitle,postBody,reactions,tags) => {
    //    console.log(userId,postTitle,postBody,reactions,tags);
          dispatch({
            type : 'ADD_POST',
            payload :     {
                id : Date.now() ,
                title : postTitle,
                body : postBody,
                reactions : reactions,
                userId : userId,
                tags : tags,
            }
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

    const deletePost = (postId) => {
        console.log(`deleted post : ${postId}`);
        dispatch({
            type : 'DELETE_POST',
            payload : { postId },
        })
    }

  return (
    <PostListContext.Provider value={{ postListState, addPost, addMultiplePosts, deletePost }}> 
        {children}
    </PostListContext.Provider>
  )
}

export default PostListContextProvider