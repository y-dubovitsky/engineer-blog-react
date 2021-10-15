import { Link } from 'react-router-dom';
import cn from 'classnames';

import style from './post.module.css';

export default function Post({ post }) {
  return (
    <div className={cn(style.post)}>
      <h1>{post.title}</h1>
      <h3>{post.description}</h3>
      <p>{post.author}</p>
      <p>Delete</p>
      <Link className={cn(style.more)} to={`/post/${post.id}`}>See more...</Link>
    </div>
  )
}

