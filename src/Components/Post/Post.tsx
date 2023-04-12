import React from 'react'
import './_post.scss'
import { FaRegCalendar , FaRegComments } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import PostInterface from '../../ts/Interfaces/PostInterface';

const Post: React.FC<PostInterface> = ({post}) => {
  return (
    <div className='post-single'>
      <div className="post-img">
        <img src={post.img} alt="" />
      </div>
      <div className="post-content">
        <div className="user-section">
          <img src={post.userImg} alt="" />
          <span className="user-name">{post.userName}</span>
        </div>
        <span className="category">{post.category}</span>
        <Link to="/"><h4 className="post-title">{post.title}</h4></Link>
        <p>Single stroke at the present moment and yet I feel that lorem quis bibendum auctor.</p>
        <div className="post-info">
          <span className='info'>
            <FaRegCalendar className="icon" />
            <span>{post.date}</span>
          </span>
          <span className='info'>
            <FaRegComments className="icon" />
            <span>{post.commentsCount < 10 ? `0${post.commentsCount}` : post.commentsCount } Comments</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Post
