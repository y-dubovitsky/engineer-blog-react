import Badge from '../badge/badge';
import style from './dashboard.module.css';
import { Switch } from 'react-router';
import About from '../about/about';
import PostForm from '../post-form/post-form';
import Skills from '../skills/skills';
import University from '../university/university';
import Work from '../work/work';
import ProtectedRoute from '../../../wrappers/protected-route';

{/* TODO Добавить https://react-dnd.github.io/react-dnd/examples/tutorial */ }

export default function Dashboard() {
  return (
    <div className={style.container}>
      <div className={style.badgeList}>
        <Badge />
        <Badge />
        <Badge />
        <Badge />
      </div>
      <Switch>
        <ProtectedRoute path="/admin/about" component={About} />
        <ProtectedRoute path="/admin/blog" component={PostForm} />
        <ProtectedRoute path="/admin/university" component={University} />
        <ProtectedRoute path="/admin/works" component={Work} />
        <ProtectedRoute path="/admin/skills" component={Skills} />
      </Switch>
    </div>
  )
}