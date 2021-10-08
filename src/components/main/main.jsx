
import cn from 'classnames';

import style from './main.module.css';

export default function main() {
  return (
    <div className={cn(style.main)}>
      <div className={cn(style.content)}>
      </div>
      <div className={cn(style.info)}>
      </div>
    </div>
  )
}