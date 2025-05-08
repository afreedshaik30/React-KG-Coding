import React, { useContext } from 'react'
import { useRef } from 'react'
import { PostListContext } from '../store/post-list-store'

const CreatePost = () => {
 
  const {addPost} = useContext(PostListContext);

  const userIdElement = useRef()
  const postTitleElement = useRef()
  const postBodyElement = useRef()
  const reactionsElement = useRef()
  const tagsElement = useRef()
   
  const handleSubmit = (event) => {
        event.preventDefault(); //1

        //2
        const userId = userIdElement.current.value;
        const postTitle = postTitleElement.current.value;
        const postBody = postBodyElement.current.value;
        const reactions = reactionsElement.current.value;
        const tags = tagsElement.current.value.split(" ");

        // 3
        userIdElement.current.value = ' '
        postTitleElement.current.value = ' '
        postBodyElement.current.value = ' '
        reactionsElement.current.value = ' '
        tagsElement.current.value = ' '

        // 4
        addPost(userId,postTitle,postBody,reactions,tags);
  }

  return (
<form className='create-post' onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="userId" className="form-label">User Id </label>
    <input type="text" ref={userIdElement} className="form-control" id="userId" placeholder='Your User Id'/>
  </div>

  <div className="mb-3">
    <label htmlFor="title" className="form-label">Post Title</label>
    <input type="text" ref={postTitleElement} className="form-control" id="title" placeholder='How are ypu feeling Today ??'/>
  </div>

  <div className="mb-3">
    <label htmlFor="body" className="form-label">Post Body Content</label>
    <textarea rows={4} type="text" ref={postBodyElement} className="form-control" id="body" placeholder='Tell us more about it'/>
  </div>

  <div className="mb-3">
    <label htmlFor="reactions" className="form-label">No. of Reactions</label>
    <input type="text" ref={reactionsElement} className="form-control" id="reactions" placeholder='React here..!'/>
  </div>

  <div className="mb-3">
    <label htmlFor="tags" className="form-label">Tags </label>
    <input type="text" ref={tagsElement} className="form-control" id="tags" placeholder='Enter Tags here using space..!'/>
  </div>

  <button type="submit" className="btn btn-primary">POST</button>
</form>
  )
}

export default CreatePost