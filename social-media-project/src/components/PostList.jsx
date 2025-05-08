import React, { useContext } from 'react'
import Post from './Post'
import { PostListContext } from '../store/post-list-store';

const PostList = () => {
  const {postListState} = useContext(PostListContext);
  return (
    <>
      {
        postListState.map((p) => <Post key={p.id} postData={p}/>)
      }
    </>
  )
}

export default PostList