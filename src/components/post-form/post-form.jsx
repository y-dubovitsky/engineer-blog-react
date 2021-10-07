import { useState } from "react";
import { connect } from "react-redux";
import { addPost } from "../../redux/actions/postAction";

import cn from 'classnames';

import style from './post-form.module.css';

const PostForm = ({ addPost }) => {

  const [post, setPost] = useState({});

  const handleInputPost = (e) => {
    const { name, value } = e.target;
    setPost({
      ...post,
      id: Math.random() * 10, //FIXME Убрать это!
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
      <button onClick={() => addPost(post)}>Add Post</button>
    </div>
  )
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    addPost: (value) => dispatch(addPost(value)),
  }
}

export default connect(null, mapDispatchToProps)(PostForm);