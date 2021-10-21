import ProtectedRoute from '../../../wrappers/protected-route';
import PostForm from '../post-form/post-form';
import University from '../university/university';
import Work from '../work/work';
import Skills from '../skills/skills';
import Stat from '../stat/stat';
import style from './control.module.css';

export default function Control() {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <ProtectedRoute path="/admin/blog" component={PostForm} />
        <ProtectedRoute path="/admin/university" component={University} />
        <ProtectedRoute path="/admin/works" component={Work} />
        <ProtectedRoute path="/admin/skills" component={Skills} />
        {/* TODO Добавить https://react-dnd.github.io/react-dnd/examples/tutorial */}
        {/* <div className={style.statList}>
        <Stat />
        <Stat />
        <Stat />
        <Stat />
      </div> */}
      </div>
      <div className={style.description}>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem magnam officia at iste esse! Facilis qui est repellat quasi eaque?</p>
      </div>
    </div>
  )
}