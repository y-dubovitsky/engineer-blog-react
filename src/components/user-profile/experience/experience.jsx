import cn from 'classnames';

import style from './experience.module.css';

export default function Experience() {
  return (
    <div className={cn(style.experience)}>
      <div className={cn(style.info)}>
        <span>EXPERIENCE</span>
        <h2>Work Experience</h2>
      </div>
      <div className={cn(style.timeline)}>
        <div className={cn(style.container, style.left)}>
          <div className={cn(style.date)}>15 Dec</div>
          <div className={cn(style.content)}>
            <h2>Lorem ipsum dolor sit amet</h2>
            <p>
              Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
            </p>
          </div>
        </div>
        <div className={cn(style.container, style.right)}>
          <div className={cn(style.date)}>15 Dec</div>
          <div className={cn(style.content)}>
            <h2>Lorem ipsum dolor sit amet</h2>
            <p>
              Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
            </p>
          </div>
        </div>
        <div className={cn(style.container, style.left)}>
          <div className={cn(style.date)}>15 Dec</div>
          <div className={cn(style.content)}>
            <h2>Lorem ipsum dolor sit amet</h2>
            <p>
              Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}