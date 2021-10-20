import { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  getWorkList,
} from '../../../redux/actions/workAction';
import WorkForm from '../work-form/work-form';

import style from './work.module.css';

function Work({ work, getWorkList }) {

  const { workList } = work;

  useEffect(() => {
    if (!workList) {
      getWorkList()
    }
  }, []) //FIXME Вызывается 1 раз при монтирвании компонента!

  return (
    <div className={style.container}>
      <WorkForm />
      <div className={style.list}>
        <h2 className={style.title}>My Work List:</h2>
        <ul className={style.table}>
          {workList?.map(work => (
            <li key={work.id}>{work.name} <i className="far fa-trash-alt"></i></li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const mapStateToProps = (state, props) => (
  {
    work: state.work
  }
);

export default connect(mapStateToProps, { getWorkList })(Work);