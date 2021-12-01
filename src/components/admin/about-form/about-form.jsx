import cn from 'classnames';
import { useState, useEffect } from 'react';

import style from './about-form.module.css';

export default function AboutForm({ styles, ...rest }) {

  

  return (
    <div className={cn(styles, style.form)}>
      <input type="text" name="about" />
      <input type="file" name="avatar" src="" alt="" />
      <button>Send</button>
    </div>
  )
}