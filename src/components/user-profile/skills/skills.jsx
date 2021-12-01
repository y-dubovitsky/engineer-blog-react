import cn from 'classnames';

import style from './skills.module.css';

export default function Skills() {
  return (
    <div className={cn(style.container)}>
      <div className={cn(style.description)}>
        <span>My Specialty</span>
        <h2>My Skills</h2>
      </div>
      <div className={cn(style.skills)}>
        <div>
          <p>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.</p>
        </div>
        <div className={cn(style.porgressContainer)}>
          <div className={cn(style.progressWrap)}>
            <h3>Java</h3>
            <div className={cn(style.progress)}>
              <div className={cn(style.progressBar)}>
              </div>
              <p>75%</p>
            </div>
          </div>
        </div>
        <div className={cn(style.porgressContainer)}>
          <div className={cn(style.progressWrap)}>
            <h3>JavaScript</h3>
            <div className={cn(style.progress)}>
              <div className={cn(style.progressBar)}>
              </div>
              <p>75%</p>
            </div>
          </div>
        </div>
        <div className={cn(style.porgressContainer)}>
          <div className={cn(style.progressWrap)}>
            <h3>React</h3>
            <div className={cn(style.progress)}>
              <div className={cn(style.progressBar)}>
              </div>
              <p>75%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}