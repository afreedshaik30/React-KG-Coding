import React, { useContext } from "react";
import '../App.css'
import { MdOutlineDeleteForever } from "react-icons/md";
import { BiLike,BiDislike } from "react-icons/bi";
import { PostListContext } from "../store/post-list-store";

const Post = ({postData}) => {
 
  const { deletePost } = useContext(PostListContext);

  return (
    <div className="card post-card">
      {/* <img src="..." className="card-img-top" alt="..." /> */}
      <div className="card-body">
        <h5 className="card-title">{postData.title}
        
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
        onClick={() => deletePost(postData.id)}>
              <MdOutlineDeleteForever style={{ fontSize: '1.5rem'}}/>
        </span>
        </h5>
        <p className="card-text">{postData.body}</p>
        <p className='card-text'>
  <span className="badge pill text-bg-primary" style={{ fontSize: '1.0rem' }}>
    <BiLike style={{ fontSize: '1.1rem' }} /> Likes: {postData.reactions.likes}<br/>
    <BiDislike style={{ fontSize: '1.1rem' }}/>  Dislikes: {postData.reactions.dislikes}
  </span>
</p>
      </div>
      <div className="alert alert-info reactions" role="alert">   
        {
          postData.tags.map((tg) => <span key={tg} className="badge rounded-pill text-bg-info hashTag">{"#"+tg}</span>)
        }
      </div>
    </div>
  );
};

export default Post;
