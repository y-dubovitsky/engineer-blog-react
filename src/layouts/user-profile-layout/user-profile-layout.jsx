import cn from 'classnames';
import { Route } from 'react-router-dom';
import SignIn from '../../components/home/sign-in/sign-in';
import SignUp from '../../components/home/sign-up/sign-up';
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
import Skills from '../../components/user-profile/skills/skills';
import style from './user-profile-layout.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfo, selectUser } from '../../redux/features/user/userSlice';
import { useEffect } from 'react';
import FadeComponents from '../../wrappers/fade-components';

const UserProfileLayout = ({ history }) => {

  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    const username = getUsernameFromUrl();
    if (username) {
      dispatch(getUserInfo(username));
    }
    if (user.error === 'error') {
      history.push("/error-page");
    }
  }, [user.error]);

  const getUsernameFromUrl = () => {
    return history.location.pathname.replace("/user-profile/", "");
  }

  return (
    <div className={style.container}>
      <Route path="/user-profile/sign-in" component={<FadeComponents><SignIn /></FadeComponents>}/>
      <Route path="/user-profile/sign-up" component={<FadeComponents><SignUp /></FadeComponents>}/>
      <Aside />
      <div className={cn(style.main)}>
        <FadeComponents>
          <Hero />
          <About />
          <Services />
          <Counter />
          <Skills />
          <Education />
          <Experience />
          <RecentWorks />
          <Blog />
          <Contacts />
        </FadeComponents>
      </div>
    </div>
  )
}

export default UserProfileLayout;
