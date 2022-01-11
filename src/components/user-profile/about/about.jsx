import cn from 'classnames';
import { useSelector } from 'react-redux';
import { selectUser, selectUserEntity } from '../../../redux/features/user/userSlice';
import Loader from '../../common/loader/loader.component';
import style from './about.module.css';

const About = () => {

  const userEntity = useSelector(selectUserEntity);
  const user = useSelector(selectUser);

  if (user.status === 'idle') {
    return <Loader />;
  }

  const { about, userAboutTag, successProjectCount } = userEntity.userAbout;

  // Верстку пофиксить!
  const showUserTechnologies = (technologies) => {
    return technologies.map(tech => (
      <div key={tech.id} className={cn(style.technology)}>
        {/*TODO Добавить возможность пользователю выбирать иконки и мб цвета */}
        <i className="fab fa-react"></i>
        <h3>{tech.name}</h3>
      </div>
    ))
  }

  const showUserAboutText = (text) => {
    const arrayOfString = text.split(".");

    return arrayOfString.map(string => (
      <p>{string}</p>
    ))
  }

  return (
    <section className={cn(style.container)}>
      <h3>ABOUT ME</h3>
      <h1>WHO AM I?</h1>
      <div className={style.about}>
        {showUserAboutText(about)}
      </div>
      <div className={cn(style.about)}>
        <div className={cn(style.technologies)}>
          {/* <div className={cn(style.technology)}>
            <i className="fab fa-react"></i>
            <h3>Front-End Developer</h3>
          </div>
          <div className={cn(style.technology)}>
            <i className="fas fa-mobile-alt"></i>
            <h3>Application</h3>
          </div>
          <div className={cn(style.technology)}>
            <i className="fas fa-server"></i>
            <h3>Backend Developer</h3>
          </div>
          <div className={cn(style.technology)}>
            <i className="fas fa-brain"></i>
            <h3>Engineere</h3>
          </div> */}
          {showUserTechnologies(userAboutTag)}
        </div>
        <div className={cn(style.hire)}>
          I am happy to know you
          that {successProjectCount}+ projects done sucessfully!
        </div>
      </div>
    </section>
  )
}

export default About;