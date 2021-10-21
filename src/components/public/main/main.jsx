import cn from 'classnames';
import { connect } from 'react-redux';
import Fade from 'react-reveal/Fade';
import { Route } from 'react-router-dom';
import About from '../about/about';
import Aside from '../aside/aside';
import Blog from '../blog/blog';
import Contacts from '../contacts/contacts';
import Counter from '../counter/counter';
import Education from '../education/education';
import Experience from '../experience/experience';
import Hero from '../hero/hero';
import RecentWorks from '../recent-works/recents-works';
import Services from '../services/services';
import SignIn from '../sign-in/sign-in';
import Skills from '../skills/skills';
import SignUp from '../sign-up/sign-up';
import { isUserAuthCheck } from '../../../redux/actions/authAction';

import style from './main.module.css';
import { useEffect } from 'react';

function Main({ auth, isUserAuthCheck }) {

  // Проверка на случай перезагрузки страницы, если пользователь уже вошел и перезагрузил страницу.
  useEffect(() => {
    if (!auth.user) {
      isUserAuthCheck();
    }
  }, []);

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

export default connect(mapStateToProps, { isUserAuthCheck })(Main);