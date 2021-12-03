import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewPost } from "../../../redux/features/post/postSlice";

import cn from 'classnames';

import style from './post-form.module.css';

const PostForm = () => {

  const [post, setPost] = useState({});
  const dispatch = useDispatch();

  const handleInputPost = (e) => {
    const { name, value } = e.target;
    setPost({
      ...post,
      [name]: value
    })
  }

  return (
    <div className={cn(style.container)}>
      <div className={cn(style.form)}>
        <label htmlFor="title">Title</label>
        <input onChange={handleInputPost} type="text" name="title" />
        <label htmlFor="description">Description</label>
        <input onChange={handleInputPost} type="textarea" name="description" />
        <label htmlFor="author">Author</label>
        <input onChange={handleInputPost} type="text" name="author" />
        {/* TODO Улучшить это */}
        <button onClick={() => dispatch(addNewPost(post))}>Add Post</button>
      </div>
    </div>
  )
}

export default PostForm;