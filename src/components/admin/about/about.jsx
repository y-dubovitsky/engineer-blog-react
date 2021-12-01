import AboutForm from "../about-form/about-form";

import style from './about.module.css';

export default function About() {
  return (
    <div className={style.container}>
      <h1 className={style.title}>BIO:</h1>
      {/*TODO Пробрасываем стили в компонент! */}
      <AboutForm styles={style.form}/>
      <div className={style.description}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et dolore fugiat deleniti ipsa sit tenetur impedit non quas esse soluta ducimus, reiciendis id provident ad accusamus eligendi! Vel, culpa modi!
      </div>
    </div>
  )
}