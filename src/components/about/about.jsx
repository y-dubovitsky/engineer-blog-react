import cn from 'classnames';

import style from './about.module.css'

const About = () => {
  return (
    <div className={cn(style.container)}>
      <h3>Info</h3>
      <ul>
        <li>Lorem, ipsum dolor.</li>
        <li>Lorem, ipsum dolor.</li>
        <li>Lorem, ipsum dolor.</li>
      </ul>
    </div>
  )
}

export default About;