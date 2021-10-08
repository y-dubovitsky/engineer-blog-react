
import cn from 'classnames';

import style from './main.module.css';
import { Route, Redirect, Switch } from 'react-router-dom';
import PostList from '../post-list/post-list';
import Contacts from '../contacts/contacts';
import SignIn from '../sign-in/sign-in';
import About from '../about/about';

export default function main() {
  return (
    <div className={cn(style.container)}>
      <Switch>
        <Route path="/" exact component={PostList} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/about" component={About} />
        <Route path="/posts" component={PostList} />
      </Switch>
    </div>
  )
}