import cn from 'classnames';

import style from './footer.module.css'

const Footer = () => {
  return (
    <div className={cn(style.footer)}>
      <div className={cn(style.up)}>
        <ul>
          <li><h3>Best Tutorials</h3></li>
          <li>How to Start a Blog</li>
          <li>How to Start a Podcast</li>
          <li>How to Choose a Domain Name</li>
        </ul>
        <ul>
          <li><h3>Hosting For Bloggers</h3></li>
          <li>Best Blog Hosting Sites</li>
          <li>Bluehost Review</li>
          <li>Kinsta Review</li>
        </ul>
      </div>
      <div className={cn(style.end)}>
        <ul>
          <li>Blog</li>
          <li>About us</li>
          <li>What We Recommend</li>
        </ul>
        <ul>
          <li>Free Themes</li>
          <li>Documentation</li>
          <li>Support</li>
        </ul>
        <ul>
          <li>Terms and Conditions</li>
          <li>Privacy Policy</li>
          <li>Support Policy</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer;