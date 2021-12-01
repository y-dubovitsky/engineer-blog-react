import Badge from '../badge/badge';
import Control from '../control/control';
import style from './dashboard.module.css';

export default function Dashboard() {
  return (
    <div className={style.container}>
      <div className={style.badgeList}>
        <Badge />
        <Badge />
        <Badge />
        <Badge />
      </div>
      <Control/>
    </div>
  )
}