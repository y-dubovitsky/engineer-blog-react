import cn from 'classnames';

import style from './contacts.module.css'

const Contacts = () => {
  return (
    <div className={cn(style.container)}>
      <span>GET IN TOUCH</span>
      <h2>CONTACT</h2>
      <div className={cn(style.row)}>
        <div className={cn(style.contacts)}>
          <div className={cn(style.column)}>
            <i className={cn(style.icon, `far`, `fa-envelope-open`)}></i>
            <h3>y.dubovitsky@gmail.com</h3>
          </div>
          <div className={cn(style.column)}>
            <i className={cn(style.icon, "fas fa-phone")}></i>
            <h3>Phone</h3>
          </div>
          <div className={cn(style.column)}>
            <i className={cn(style.icon, "fas", "fa-map-pin")}></i>
            <h3>Russian, Moscow</h3>
          </div>
        </div>
        <div className={cn(style.form)}>
          <input type="text" name="" id="" placeholder="Name" />
          <input type="text" name="" id="" placeholder="Email" />
          <input type="text" name="" id="" placeholder="Subject" />
          <input type="textarea" name="" id="" placeholder="Message" />
          <button>SEND MESSAGE</button>
        </div>
      </div>
    </div>
  )
}

export default Contacts;