import Header from './header/header';
import Hero from './hero/hero';
import Main from './main/main';
import Footer from './footer/footer';

import cn from 'classnames';

import style from './App.css';

function App() {
  return (
    <div className={cn(style.app)}>
      <Header className={cn(style.header)} />
      <Hero className={cn(style.hero)}/>
      <Main className={cn(style.main)}/>
      <Footer className={cn(style.footer)}/>
    </div>
  );
}

export default App;
