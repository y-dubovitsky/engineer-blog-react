import { useState } from 'react';
import { addNewWork } from '../../../redux/features/work/workSlice';
import { useDispatch } from 'react-redux';

import style from './work-form.module.css';

function WorkForm() {

  const [workForm, setWorkForm] = useState({});
  const dispatch = useDispatch();

  const onFormChange = (event) => {
    setWorkForm({
      ...workForm,
      [event.target.name]: event.target.value
    })
  }

  return (
    <div className={style.container}>
      <div className={style.form}>
        <input onChange={onFormChange} type="text" name="name" placeholder="Company name" />
        <input onChange={onFormChange} type="text" name="position" placeholder="Position" />
        <input onChange={onFormChange} type="text" name="function" placeholder="Function" />
        <input onChange={onFormChange} type="text" name="achievements" placeholder="Achievements" />
        <input onChange={onFormChange} type="text" name="startDate" placeholder="Start date" />
        <input onChange={onFormChange} type="text" name="endDate" placeholder="End date" />
        <button onClick={() => dispatch(addNewWork(workForm))}>Add Work</button>
      </div>
    </div>
  )
}

export default WorkForm;