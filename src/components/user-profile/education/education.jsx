import cn from 'classnames';

import styles from './education.module.css';
import { useSelector } from 'react-redux';
import { selectUserEntity, selectUser } from '../../../redux/features/user/userSlice';
import Loader from '../../common/loader/loader.component';

const Education = () => {

  const { universities } = useSelector(selectUserEntity);
  const { status } = useSelector(selectUser);

  if (status === 'idle') {
    return <Loader />;
  }

  const showUserUniversities = (universities) => {
    return universities.map(university => (
      <div key={university.id} className={cn(styles.row)}>
        <div className={styles.universityName}>{university.name}</div>
        <div className={styles.speciality}>{university.speciality}</div>
        <div className={styles.cathedra}>{university.cathedra}</div>
        <div className={styles.duration}>
          {university.startYear} - {university.endYear}
        </div>
        <div className={styles.description}>{university.description}</div>
      </div>
    ))
  }

  return (
    <div className={cn(styles.container)}>
      <div className={cn(styles.info)}>
        <span>Education</span>
        <h2>Education</h2>
      </div>
      <div className={cn(styles.table)}>
        {showUserUniversities(universities)}
      </div>
    </div>
  )
}

export default Education;