import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchUserUniversityList,
  selectUniversityEntities
} from '../../../redux/features/university/universitySlice';
import UniversityForm from '../university-form/university-form';
import style from './university.module.css';

function University() {

  const dispatch = useDispatch();
  const universities = useSelector(selectUniversityEntities);

  useEffect(() => {
    dispatch(fetchUserUniversityList());
  }, [])

  return (
    <div className={style.container}>
      <UniversityForm />
      <div className={style.list}>
        <h2 className={style.title}>My University:</h2>
        <ul className={style.table}>
          {universities?.map(university => (
            <li key={university.id}>{university.name} <i className="far fa-trash-alt"></i></li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default University;