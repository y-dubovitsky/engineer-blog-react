import cn from 'classnames';
import { connect } from 'react-redux';
import Fade from 'react-reveal/Fade';
import { Route } from 'react-router-dom';
import About from '../../components/public/about/about';
import Aside from '../../components/public/aside/aside';
import Blog from '../../components/public/blog/blog';
import Contacts from '../../components/public/contacts/contacts';
import Counter from '../../components/public/counter/counter';
import Education from '../../components/public/education/education';
import Experience from '../../components/public/experience/experience';
import Hero from '../../components/public/hero/hero';
import RecentWorks from '../../components/public/recent-works/recents-works';
import Services from '../../components/public/services/services';
import SignIn from '../../components/public/sign-in/sign-in';
import Skills from '../../components/public/skills/skills';
import SignUp from '../../components/public/sign-up/sign-up';
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

  //TODO Добавить в адресную строку ссылку на текущего пользователя!

  const animateList = [
    <Hero />,
    <About />,
    <Services />,
    <Counter />,
    <Skills />,
    <Education />,
    <Experience />,
    <RecentWorks />,
    <Blog />,
    <Contacts />,
  ];

  return (
    <>
      {/* TODO Переделать это! Сделать так, чтобы компонент БЫЛ уже в дереве или так оставить, он будет добавляться/удаляться*/}
      <Route path="/main/sign-in" component={() => (
        <div className={cn(style.signIn)}>
          <Fade>
            <SignIn />
          </Fade>
        </div>
      )} />
      <Route path="/main/sign-up" component={() => (
        <div className={cn(style.signUp)}>
          <Fade>
            <SignUp />
          </Fade>
        </div>
      )} />
      <Aside />
      <div className={cn(style.main)}>
        <>
          {animateList.map((item, key) => (
            <div key={key}>
              <Fade>
                {item}
              </Fade>
            </div>
          ))}
        </>
      </div>
    </>
  )
}

const mapStateToProps = (state, props) => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps, { isUserAuthCheck })(UserProfileLayout);