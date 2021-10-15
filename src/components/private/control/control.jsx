import ProtectedRoute from '../../../wrappers/protected-route';
import PostForm from '../post-form/post-form';
import Stat from '../stat/stat';
import style from './control.module.css';

export default function Control() {
  return (
    <div className={style.container}>
      <ProtectedRoute path="/admin/blog" component={PostForm} />

      {/* TODO Добавить https://react-dnd.github.io/react-dnd/examples/tutorial */}
      <div className={style.statList}>
        <Stat/>
        <Stat/>
        <Stat/>
        <Stat/>
      </div>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem magnam officia at iste esse! Facilis qui est repellat quasi eaque?</p>
    </div>
  )
}