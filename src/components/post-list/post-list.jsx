import { connect } from "react-redux"

import Post from '../post/post';
import PostTheme from "../post-theme/post-theme";
import cn from 'classnames';
import style from './post-list.module.css';
import { useEffect } from "react";
import { getAllPosts } from '../../redux/actions/postAction';

function PostList({ postList, getAllPosts }) {

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <div className={cn(style.postList)}>
      <PostTheme />
      {postList.posts.map((post, idx) => {
        return (
          <Post key={idx} post={post} />
        )
      })}
    </div>
  )
}

const mapStateToProps = (state, props) => ({
  postList: state.post
})

export default connect(mapStateToProps, { getAllPosts })(PostList);