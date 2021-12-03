import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWorkList, selectAllWorks, selectWorkStatus } from '../../../redux/features/work/workSlice';

import WorkForm from '../work-form/work-form';

import style from './work.module.css';

function Work() {

  const dispatch = useDispatch();

  const workEntities = useSelector(selectAllWorks);
  const workStatus = useSelector(selectWorkStatus);

  //FIXME Чтобы не происходило перерендера каждый раз!
  useEffect(() => {
      dispatch(fetchWorkList())
  }, [])

  console.log(workStatus);

  return (
    <div className={style.container}>
      <WorkForm />
      <div className={style.list}>
        <h2 className={style.title}>My Work List:</h2>
        <ul className={style.table}>
          {workEntities?.map(work => (
            <li key={work.id}>{work.name} <i className="far fa-trash-alt"></i></li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Work;