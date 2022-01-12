import cn from 'classnames';

import styles from './experience.module.css';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../redux/features/user/userSlice';
import Loader from '../../common/loader/loader.component';

export default function Experience() {

  const { status, userEntity } = useSelector(selectUser);

  const showUserWorkExperience = (works) => {
    return works.map((work, idx) => (
      <div className={cn(styles.container, idx % 2 === 0 ? styles.left : styles.right)}>
        <div className={cn(styles.date)}>{work.startDate}</div>
        <div className={cn(styles.content)}>
          <h2>{work.name}</h2>
          <p>{work.position}</p>
        </div>
      </div>
    ))
  }

  if (status === 'idle') {
    return <Loader />;
  }

  return (
    <div className={cn(styles.experience)}>
      <div className={cn(styles.info)}>
        <span>EXPERIENCE</span>
        <h2>Work Experience</h2>
      </div>
      <div className={cn(styles.timeline)}>
        {showUserWorkExperience(userEntity.works)}
      </div>
    </div>
  )
}