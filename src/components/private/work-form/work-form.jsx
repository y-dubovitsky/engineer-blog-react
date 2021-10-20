import { useState } from 'react';
import { connect } from 'react-redux';
import { addWork } from '../../../redux/actions/workAction';

import style from './work-form.module.css';

function WorkForm({ addWork }) {

  const [workForm, setWorkForm] = useState({});

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
        <button onClick={() => addWork(workForm)}>Add Work</button>
      </div>
    </div>
  )
}

const mapStateToProps = (state, props) => (
  {
    work: state.work
  }
)

export default connect(mapStateToProps, { addWork })(WorkForm);