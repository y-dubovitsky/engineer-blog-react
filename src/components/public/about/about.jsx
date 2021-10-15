import cn from 'classnames';

import style from './about.module.css'

const About = () => {
  return (
    <section className={cn(style.container)}>
      <h3>ABOUT ME</h3>
      <h1>WHO AM I?</h1>
      <p>Hi I'm Jackson Ford On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country.</p>

      <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
      <div className={cn(style.about)}>
        <div className={cn(style.technologies)}>
          <div className={cn(style.technology)}>
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
          </div>
        </div>
        <div className={cn(style.hire)}>
          I am happy to know you
          that 300+ projects done sucessfully!
        </div>
      </div>
    </section>
  )
}

export default About;