import cn from 'classnames';

import style from './skills.module.css';
import Loader from '../../common/loader/loader.component';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../redux/features/user/userSlice';
import { getRandomColor } from '../../../utils/colorUtils';

export default function Skills() {

  const { userEntity, status } = useSelector(selectUser);

  if (status === 'idle') {
    return <Loader />;
  }

  const showUserSkills = (skills) => {
    return skills.map(skill => (
      <div key={skill.id} className={cn(style.porgressContainer)}>
        <div className={cn(style.progressWrap)}>
          <h3>{skill.name}</h3>
          <div className={cn(style.progress)}>
            {/*TODO Как-то переделать прогрессБАр */}
            <div
              className={cn(style.progressBar)}
              style={{ width: skill.level + '%', background: getRandomColor() }}
            >
            </div>
            <p>{skill.level}%</p>
          </div>
        </div>
      </div>
    ))
  }

  return (
    <div className={cn(style.container)}>
      <div className={cn(style.description)}>
        <span>My Specialty</span>
        <h2>My Skills</h2>
      </div>
      <div className={cn(style.skills)}>
        {/* TODO Добавить какое то описание к скиллам? */}
        <div>
          <p>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.</p>
        </div>
        {showUserSkills(userEntity.skills)}
      </div>
    </div>
  )
}