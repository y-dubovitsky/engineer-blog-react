import { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  getUserUniversityList,
  addUniversity
} from '../../../redux/actions/universityAction';
import UniversityForm from '../university-form/university-form';

import style from './university.module.css';

function University({ university, getUserUniversityList }) {

  const { universityList } = university;

  useEffect(() => {
    if (!universityList) {
      getUserUniversityList()
    }
  }, [])

  return (
    <div className={style.container}>
      <UniversityForm />
      <div className={style.list}>
        <h2 className={style.title}>My University:</h2>
        <ul className={style.table}>
          {universityList?.map(university => (
            <li key={university.id}>{university.name} <i className="far fa-trash-alt"></i></li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const mapStateToProps = (state, props) => (
  {
    university: state.university
  }
);

export default connect(mapStateToProps, { getUserUniversityList, addUniversity })(University);