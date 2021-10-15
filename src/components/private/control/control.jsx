import ProtectedRoute from '../../../wrappers/protected-route';
import PostForm from '../post-form/post-form';
import style from './control.module.css';

export default function Control() {
  return (
    <div className={style.container}>
      <ProtectedRoute path="/admin/blog" component={PostForm} />
    </div>
  )
}