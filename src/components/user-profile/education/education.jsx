import cn from 'classnames';

import style from './education.module.css';


export default function Education() {
  return (
    <div className={cn(style.container)}>
      <div className={cn(style.info)}>
        <span>Education</span>
        <h2>Education</h2>
      </div>
      <div className={cn(style.table)}>
        <div className={cn(style.row)}>
          Lorem ipsum dolor sit amet.
        </div>
        <div className={cn(style.row)}>
          Lorem ipsum dolor sit amet.
        </div>
        <div className={cn(style.row)}>
          Lorem ipsum dolor sit amet.
        </div>
      </div>
    </div>
  )
}