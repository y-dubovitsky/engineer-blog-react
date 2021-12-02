import cn from 'classnames';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import style from './aside.module.css';

function Aside({ user }) {

  return (
    <aside className={cn(style.aside)}>
      <div className={cn(style.author)}>
        <div className={cn(style.avatar)}>
        </div>
        <h1 className={cn(style.signIn)}>Dubovitsky Yury</h1>
        <span><a href="#">Engineer/Developer</a> from Moscow</span>
      </div>
      <nav className={cn(style.navbar)}>
        <ul>
          {user ?
            <li className={cn(style.adminPanel)}><Link to="/admin">Admin panel</Link></li>
            :
            <li className={cn(style.adminPanel)}><Link to="/main/sign-up">Sign Up</Link></li>
          }
          <li className=""><a href="#" data-nav-section="home">Home</a></li>
          <li className=""><a href="#" data-nav-section="about">About</a></li>
          <li className=""><a href="#" data-nav-section="services">Services</a></li>
          <li className=""><a href="#" data-nav-section="skills">Skills</a></li>
          <li className=""><a href="#" data-nav-section="education">Education</a></li>
          <li className=""><a href="#" data-nav-section="experience">Experience</a></li>
          <li className=""><a href="#" data-nav-section="work">Work</a></li>
          <li className=""><a href="#" data-nav-section="blog">Blog</a></li>
          <li className=""><a href="#" data-nav-section="contact">Contact</a></li>
        </ul>
      </nav>

      <div className={cn(style.social)}>
        <p><small>© Copyright 2014-{new Date().getFullYear()}. All rights reserved.</small></p>
        <p><small>Made by me with <i className="fas fa-heart"></i></small></p>
        {/* FIXME Добавить иконки? */}
        <ul>
          <li><a href="#"><i className="icon-facebook2"></i></a></li>
          <li><a href="#"><i className="icon-facebook2"></i></a></li>
          <li><a href="#"><i className="icon-facebook2"></i></a></li>
          <li><a href="#"><i className="icon-twitter2"></i></a></li>
          <li><a href="#"><i className="icon-instagram"></i></a></li>
          <li><a href="#"><i className="icon-linkedin2"></i></a></li>
        </ul>
      </div>
    </aside>
  )
}

const mapStateToProps = (state, props) => {
  return {
    user: state.auth.user
  }
}

export default connect(mapStateToProps)(Aside);
