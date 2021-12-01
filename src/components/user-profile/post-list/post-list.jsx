import { connect } from "react-redux"

import Post from '../post/post';
import PostTheme from "../post-theme/post-theme";
import cn from 'classnames';
import style from './post-list.module.css';
import { useEffect } from "react";
import { getAllPosts } from '../../redux/actions/postAction';
import Info from '../info/info';

function PostList({ postList, getAllPosts }) {

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <div className={cn(style.container)}>
      <div className={cn(style.postsContainer)}>
        <div className={cn(style.theme)}>
          <PostTheme />
        </div>
        <div className={cn(style.posts)}>
          {/* TODO Вынести в отдельный компонент? */}
          {postList.posts.map((post) => {
            return (
              <Post key={post.id} post={post} />
            )
          })}
        </div>
      </div>
      <div className={cn(style.infoContainer)}>
        <div className={cn(style.info)}>
          <Info />
        </div>
        <div className={cn(style.additionalInfo)}>
          <Info />
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state, props) => ({
  postList: state.post
})

export default connect(mapStateToProps, { getAllPosts })(PostList);