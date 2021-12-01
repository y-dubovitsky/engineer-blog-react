import cn from 'classnames';

import style from './recents-works.module.css';
import image from '../../../assets/github.png';

export default function RecentWorks() {

  return (
    <div className={cn(style.container)}>
      <div className={cn(style.info)}>
        <span className={cn(style.heading)}>MY WORK</span>
        <h2 className={cn(style.header)}>Recent Works</h2>
      </div>
      <div className={cn(style.works)}>
        <div className={cn(style.workContainer)}>
          <div className={cn(style.work)}>
            <img src={image} alt="" />
          </div>
          <div className={cn(style.workInfo)}>
            Lorem, ipsum.
            <a href="http://" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a> 
          </div>
        </div>
        <div className={cn(style.workContainer)}>
          <div className={cn(style.work)}>
            <img src={image} alt="" />
          </div>
          <div className={cn(style.workInfo)}>
            Lorem, ipsum.
            <a href="http://" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a> 
          </div>
        </div>
        <div className={cn(style.workContainer)}>
          <div className={cn(style.work)}>
            <img src={image} alt="" />
          </div>
          <div className={cn(style.workInfo)}>
            Lorem, ipsum.
            <a href="http://" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a> 
          </div>
        </div>
      </div>
      <button>Load More</button>
    </div>
  )
}