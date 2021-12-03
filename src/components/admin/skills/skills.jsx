import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  fetchUserSkills,
  addSkill,
  selectSkillEntities
} from '../../../redux/features/skill/skillSlice';

import style from './skills.module.css';

function Skills() {

  const dispatch = useDispatch();
  const skills = useSelector(selectSkillEntities)

  //FIXME Сделать так, чтобы каждый раз не отправлялось!
  useEffect(() => {
    dispatch(fetchUserSkills())
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

    Array.from(skillsInputList).map(input => { //! Отправляет КАЖДЫЙ скилл по одному!
      dispatch(addSkill({
        name: input.value
      }))
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
        {skills?.map(skill => (
          <p key={skill.id}>{skill.name} : {skill.level}</p>
        ))}
      </div>
    </div>
  )
}

export default Skills;