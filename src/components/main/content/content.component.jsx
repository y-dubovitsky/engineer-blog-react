import {
  Route, Switch
} from "react-router-dom";
import AboutMe from '../about-me/about-me.component';
import FollowMe from '../follow-me/follow-me.component';
import Pagination from "../pagination/pagination.component";
import PostCurrent from '../post-current/post-current.component';
import PostList from '../post-list/post-list.component';
import Search from '../search/search.component';
import Subscribe from '../subscribe/subscribe.component';
import styles from './content.module.css';

const Content = () => {

  return (
    <div className={styles.container}>
      <div className={styles.posts}>
        <Switch>
          <Route exact path="/main/post/:id">
            <PostCurrent />
          </Route>
          <Route path={`/main/:page`}>
            <PostList />
            <Pagination />
          </Route>
        </Switch>
      </div>
      <div className={styles.aside}>
        <div className={styles.sticky}>
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
    </div>
  )
};

export default Content;