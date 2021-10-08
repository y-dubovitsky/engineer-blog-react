import cn from 'classnames';

import style from './hero.module.css'

const Hero = () => {
  return (
    <div className={cn(style.container)}>
      <h1 className={cn(style.title)}>Engineree blog</h1>
      <div className={cn(style.description)}>
        with our little help
        We are Monika and Patryk. We are a two-person team composed of designer and developer. We have many years of experience in making websites for clients from around the world. We also create WordPress themes and WordPress plugins. We want everyone to be able to easily launch the website on their own while respecting privacy, away from large corporations collecting huge amounts of data, preying on someone else's content.
        We say - be the owner of your content, be responsible for your own content.
        On this page, we want to share our experience and help everyone to start blogging and make a website on their own.
      </div>
    </div>
  )
}

export default Hero;