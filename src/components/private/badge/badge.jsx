import style from './badge.module.css';

export default function Badge() {
  return (
    <div className={style.container}>
      <i className="fa fa-tasks" aria-hidden="true"></i>
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
  )
}