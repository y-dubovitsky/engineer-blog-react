import style from "./header.module.css";

export default function Header() {
  return (
    <div className={style.container}>
      <div className={style.logo}></div>
      <div className={style.nav}></div>
    </div>
  )
}
