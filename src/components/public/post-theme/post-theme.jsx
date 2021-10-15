import cn from 'classnames';

import style from './post-theme.module.css'

const PostTheme = () => {
  return (
    <div className={cn(style.postTheme)}>
      <h3>PostTheme</h3>
      <ul>
        <li>Lorem, ipsum dolor.</li>
        <li>Lorem, ipsum dolor.</li>
      </ul>
    </div>
  )
}

export default PostTheme;