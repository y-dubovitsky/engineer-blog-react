import { useEffect } from 'react';
import { connect } from 'react-redux';

import {
  addSkill,
  getUserSkillList
} from '../../../redux/actions/skillAction';

import style from './skills.module.css';

function Skills({ skills, addSkill, getUserSkillList }) {

  useEffect(() => {
    if (!skills.entities) {
      getUserSkillList();
    }
  }, [])

  const addInputForm = () => {
    const skillsElement = document.querySelector("#inputContainer");

    const inputElement = document.createElement("input");
    setInputAttributeName(inputElement);
    skillsElement.append(inputElement);
  }

  // Присваивает атрибуту name инпут элемента значение из вводимого поля!
  const setInputAttributeName = (inputEl) => {
    inputEl.addEventListener("change", e => {
      const name = e.target.value;
      inputEl.setAttribute("name", name)
    })
  }

  //TODO Переделать на отправку формы!
  // Посылает запрос частями 
  const sendSkillsBatch = () => {
    const skillsElement = document.querySelector("#skills");
    const skillsInputList = skillsElement.querySelectorAll("input");

    Array.from(skillsInputList).map(input => {
      addSkill({
        name: input.value
      })
    })
  }

  return (
    <div id="skills" className={style.container}>
      <div id="inputContainer" className={style.inputContainer}>
        <input type="text" name="name" id="" placeholder="Input your skill here..." />
        <input type="text" name="name" id="" placeholder="Input your skill here..." />
        <input type="text" name="name" id="" placeholder="Input your skill here..." />
      </div>
      <div className={style.controll}>
        <button onClick={addInputForm}>Add Skill Input Form</button>
        <button onClick={sendSkillsBatch}>Send Skills</button>
      </div>
      <div className={style.info}>
        <h2>My Skills:</h2>
        {skills.entities?.map(skill => (
          <p key={skill.id}>{skill.name} : {skill.level}</p>
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = (state, props) => (
  {
    skills: state.skill
  }
)

export default connect(mapStateToProps, { addSkill, getUserSkillList })(Skills);