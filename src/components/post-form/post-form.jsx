import { useState } from "react";
import { connect } from "react-redux";
import { addNewPost } from "../../redux/actions/postAction";

import cn from 'classnames';

import style from './post-form.module.css';

const PostForm = ({ addNewPost }) => {

  const [post, setPost] = useState({});

  const handleInputPost = (e) => {
    const { name, value } = e.target;
    setPost({
      ...post,
      [name]: value
    })
  }

  return (
    <div className={cn(style.postForm)}>
      <h3>Create new Post</h3>
      <form>
        <input onChange={handleInputPost} type="text" name="title" id="" />
        <input onChange={handleInputPost} type="text" name="description" id="" />
        <input onChange={handleInputPost} type="text" name="author" id="" />
      </form>

      {/* TODO Улучшить это */}
      <button onClick={() => addNewPost(post)}>Add Post</button>
    </div>
  )
}

export default connect(null, { addNewPost })(PostForm);