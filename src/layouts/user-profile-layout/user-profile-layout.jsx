import cn from 'classnames';
import { connect } from 'react-redux';
import Fade from 'react-reveal/Fade';
import { Route } from 'react-router-dom';
import About from '../../components/user-profile/about/about';
import Aside from '../../components/user-profile/aside/aside';
import Blog from '../../components/user-profile/blog/blog';
import Contacts from '../../components/user-profile/contacts/contacts';
import Counter from '../../components/user-profile/counter/counter';
import Education from '../../components/user-profile/education/education';
import Experience from '../../components/user-profile/experience/experience';
import Hero from '../../components/user-profile/hero/hero';
import RecentWorks from '../../components/user-profile/recent-works/recents-works';
import Services from '../../components/user-profile/services/services';
import SignIn from '../../components/home/sign-in/sign-in';
import Skills from '../../components/user-profile/skills/skills';
import SignUp from '../../components/home/sign-up/sign-up';
import { isUserAuthCheck } from '../../redux/actions/authAction';

import style from './user-profile-layout.module.css';
import { useEffect } from 'react';

const UserProfileLayout = ({ auth, isUserAuthCheck }) => {

  // Проверка на случай перезагрузки страницы, если пользователь уже вошел и перезагрузил страницу.
  useEffect(() => {
    if (!auth.user) {
      isUserAuthCheck();
    }
  }, []);

  const mapComponent = new Map([ // true/false - fade или не fade component!
    [<Hero />, true],
    [<About />, true],
    [<Services />, true],
    [<Counter />, true],
    [<Skills />, true],
    [<Education />, true],
    [<Experience />, true],
    [<RecentWorks />, true],
    [<Blog />, true],
    [<Contacts />, true],
  ]);

  const fadeComponent = (component) => {
    return (
      <Fade>
        {component}
      </Fade>
    )
  }

  //FIXME Излишняя сложность, убрать!
  const buildDomFromComponentsMap = (elementMap) => {
    return Array.from(elementMap).map(([key, value]) => {
      if (value) {
        return fadeComponent(key)
      }
      return key
    })
  }

  return (
    <div className={style.container}>
      <Route path="/user-profile/sign-in" component={fadeComponent(<SignIn />)} />
      <Route path="/user-profile/sign-up" component={fadeComponent(<SignUp />)} />
      <Aside />
      <div className={cn(style.main)}>
        {buildDomFromComponentsMap(mapComponent)}
      </div>
    </div>
  )
}

const mapStateToProps = (state, props) => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps, { isUserAuthCheck })(UserProfileLayout);
