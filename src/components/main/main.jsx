import Info from "../info/info";
import PostList from "../post-list/post-list";
import PostForm from "../post-form/post-form";

import cn from 'classnames';

import style from './main.module.css';

export default function main() {
  return (
    <div className={cn(style.main)}>
      <div className={cn(style.content)}>
        <PostList />
        <PostForm/>
      </div>
      <div className={cn(style.info)}>
        <Info />
      </div>
    </div>
  )
}