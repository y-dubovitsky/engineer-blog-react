import cn from 'classnames';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import image from '../../../assets/github.png';
import { selectUser } from '../../../redux/features/user/userSlice';
import Loader from '../../common/loader/loader.component';
import styles from './recents-works.module.css';

const RecentWorks = () => {

  const { status, userEntity } = useSelector(selectUser);
  const [countOfWorks, setСountOfWorks] = useState(6);

  const showRecentUserWork = (works, countOfWorks) => {
    return works.slice(0, countOfWorks).map(work => {
      const { id, name, html_url } = work;

      return <div key={id} className={cn(styles.workContainer)}>
        <div className={cn(styles.work)}>
          <img src={image} alt="" />
          <div className={styles.repoName}>{name}</div>
        </div>
        <div className={cn(styles.workInfo)}>
          {name}
          <a href={html_url} target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
        </div>
      </div>
    })
  }

  if (status === 'idle') {
    return <Loader />;
  }

  return (
    <div className={cn(styles.container)}>
      <div className={cn(styles.info)}>
        <span className={cn(styles.heading)}>MY WORK</span>
        <h2 className={cn(styles.header)}>Recent Works</h2>
      </div>
      <div className={cn(styles.works)}>
        {
          userEntity.hasOwnProperty('repos')
            ?
            showRecentUserWork(userEntity.repos, countOfWorks)
            :
            ''
        }
      </div>
      <button
        onClick={() => setСountOfWorks(countOfWorks + 3)}
      >
        Load More
      </button>
    </div>
  )
};

export default RecentWorks;