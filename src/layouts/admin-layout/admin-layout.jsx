import ProtectedRoute from '../../wrappers/protected-route';
import PostForm from '../../components/private/post-form/post-form';
import About from '../../components/private/about/about';
import University from '../../components/private/university/university';
import Work from '../../components/private/work/work';
import Skills from '../../components/private/skills/skills';
import Stat from '../../components/private/stat/stat';
import style from './admin-layout.module.css';

const AdminLayout = () => {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <ProtectedRoute path="/admin/about" component={About} />
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

export default AdminLayout;