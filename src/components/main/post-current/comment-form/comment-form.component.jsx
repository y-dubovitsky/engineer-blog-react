import styles from './comment-form.module.css';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addComment } from '../../../../redux/features/comment-form/commentFormSlice';
import { useParams } from "react-router-dom";
import cn from 'classnames';

const CommentForm = () => {

  const dispatch = useDispatch();
  const params = useParams();
  // По умолчанию в качестве параметра задается id поста
  const [commentForm, setCommentForm] = useState({postId: params.id});

  const handlerInputForm = (event) => {
    const { name, value } = event.target;
    setCommentForm({
      ...commentForm,
      [name]: value
    })
  }

  return (
    <div className={cn(styles.container, styles.svgBackground)}>
      <div className={styles.title}>
        LEAVE A COMMENT
      </div>
      <div className={styles.subtitle}>
        Your email address will not be published. Required fields are marked *
      </div>
      <div className={styles.inputWithLabel}>
        <label htmlFor="name">NAME</label>
        <input type="text" name="name" onChange={handlerInputForm} />
      </div>
      <div className={styles.inputWithLabel}>
        <label htmlFor="message">MESSAGE</label>
        <textarea name="message" onChange={handlerInputForm}></textarea>
      </div>
      <div className={styles.inputWithLabel}>
        <label htmlFor="email">EMAIL ADDRESS</label>
        <input type="text" name="email" onChange={handlerInputForm} />
      </div>
      <div className={styles.inputWithLabel}>
        <label htmlFor="website">WEBSITE</label>
        <input type="text" name="website" onChange={handlerInputForm} />
      </div>
      <button className={styles.button} onClick={() => dispatch(addComment(commentForm))}>
        Post Comment
      </button>
    </div>
  )
}

export default CommentForm;