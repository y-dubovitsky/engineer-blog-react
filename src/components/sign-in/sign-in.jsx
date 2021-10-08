import cn from 'classnames';

import style from './sign-in.module.css'

const SignIn = () => {
  return (
    <div className={cn(style.container)}>
      <h3>Info</h3>
      <ul>
        <li>Lorem, ipsum dolor.</li>
        <li>Lorem, ipsum dolor.</li>
        <li>Lorem, ipsum dolor.</li>
      </ul>
    </div>
  )
}

export default SignIn;