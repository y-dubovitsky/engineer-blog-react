import Main from '../main/main';
import Footer from '../footer/footer';
import Header from '../header/header';
import Hero from '../hero/hero';

import cn from 'classnames';
import style from './app.module.css';
// import { Route } from 'react-router-dom';

function App() {
  return (
    <div className={cn(style.app)}>
      <Header className={cn(style.header)} />
      <Hero className={cn(style.hero)} />
      <Main className={cn(style.main)} />
      <Footer className={cn(style.footer)} />
    </div>
  );
}

export default App;
