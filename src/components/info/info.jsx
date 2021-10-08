import cn from 'classnames';

import style from './info.module.css'

const Info = () => {
  return (
    <div className={cn(style.info)}>
      <h3>Info</h3>
      <ul>
        <li>Lorem, ipsum dolor.</li>
        <li>Lorem, ipsum dolor.</li>
        <li>Lorem, ipsum dolor.</li>
      </ul>
    </div>
  )
}

export default Info;