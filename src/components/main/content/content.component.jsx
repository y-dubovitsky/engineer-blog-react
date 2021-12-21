import styles from './content.module.css';
import PostList from '../post-list/post-list.component';
import AboutMe from '../about-me/about-me.component';
import FollowMe from '../follow-me/follow-me.component';
import Subscribe from '../subscribe/subscribe.component';
import Search from '../search/search.component';

const Content = (props) => {
  return (
    <div className={styles.container}>
      <PostList />
      <div className={styles.aside}>
        <div className={styles.about}>
          <AboutMe />
        </div>
        <div className={styles.follow}>
          <FollowMe />
        </div>
        <div className={styles.subscribe}>
          <Subscribe />
        </div>
        <div className={styles.search}>
          <Search />
        </div>
      </div>
    </div>
  )
};

export default Content;