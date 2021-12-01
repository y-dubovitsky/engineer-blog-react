import cn from 'classnames';

import style from './hero.module.css'

const Hero = () => {
  return (
    <section id="aaa" className={cn(style.hero)}>
      <div className={cn(style.innerText)}>
        <h1>I am <br />a Developer</h1>
        <h2>You can download this template for free on... <a href="https://github.com/y-dubovitsky/engineer-blog-react" target="_blank">github.com</a></h2>
      </div>
      <a className={cn(style.porfolioBtn)} href="https://github.com/y-dubovitsky/" target="_blank">View my works</a>
    </section>
  )
}

export default Hero;