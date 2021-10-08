
import cn from 'classnames';

import style from './main.module.css';
import { Route } from 'react-router-dom';
import PostList from '../post-list/post-list';

export default function main() {
  return (
    <div className={cn(style.container)}>
      <Route path="/posts" component={PostList} />
    </div>
  )
}