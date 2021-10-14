import cn from 'classnames';
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
import Skills from '../skills/skills';
import style from './app.module.css';

import Fade from 'react-reveal/Fade';

function App() {

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
    <div className={cn(style.container)}>
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
    </div>
  );
}

export default App;
