import cn from 'classnames';

import style from './admin.module.css';

export default function Admin() {
  return (
    <div className={cn(style.container)}>
      <h1>Admin Page</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae vel distinctio illo eaque! Modi id commodi, repudiandae sit reiciendis ab.</p>
    </div>
  )
}