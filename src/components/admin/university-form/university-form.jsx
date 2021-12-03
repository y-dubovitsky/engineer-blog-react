import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUniversity } from '../../../redux/features/university/universitySlice';

import style from './university-form.module.css';

function UniversityForm() {

  const dispatch = useDispatch();
  const [universityForm, setUniversityForm] = useState({});

  const onFormChange = (event) => {
    setUniversityForm({
      ...universityForm,
      [event.target.name]: event.target.value
    })
  }

  return (
    <div className={style.container}>
      <div className={style.form}>
        <input onChange={onFormChange} type="text" name="name" placeholder="University name" />
        <input onChange={onFormChange} type="text" name="speciality" placeholder="Speciality" />
        <input onChange={onFormChange} type="text" name="cathedra" placeholder="Cathedra" />
        <input onChange={onFormChange} type="text" name="start" placeholder="Start date" />
        <input onChange={onFormChange} type="text" name="end" placeholder="End date" />
        <input onChange={onFormChange} type="text" name="description" placeholder="Description" />
        <button onClick={() => dispatch(addUniversity(universityForm))}>Add University</button>
      </div>
    </div>
  )
}

export default UniversityForm;